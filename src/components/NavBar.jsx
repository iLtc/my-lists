import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import books from "../books";
import games from "../games";

const countItems = (data) =>
    data.reduce((total, group) => total + group.items.length, 0);
const BOOK_COUNT = countItems(books);
const GAME_COUNT = countItems(games);

const NavBar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.key]);

    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    const booksActive = !location.pathname.includes("games");
    const enActive = !location.pathname.includes("zh");

    const tabs = [
        {
            to: enActive ? "/books" : "/books/zh",
            label: enActive ? "Books" : "书籍",
            active: booksActive,
        },
        {
            to: enActive ? "/games" : "/games/zh",
            label: enActive ? "Games" : "游戏",
            active: !booksActive,
        },
    ];
    const langs = [
        {
            to: booksActive ? "/books" : "/games",
            label: "EN",
            active: enActive,
            lang: undefined,
        },
        {
            to: booksActive ? "/books/zh" : "/games/zh",
            label: "中文",
            active: !enActive,
            lang: "zh",
        },
    ];

    const totalLabel = booksActive
        ? enActive
            ? `${BOOK_COUNT} books read`
            : `${BOOK_COUNT} 本书`
        : enActive
          ? `${GAME_COUNT} games finished`
          : `${GAME_COUNT} 款游戏`;

    return (
        <div className="sticky top-0 z-20 bg-bg">
            <header className="border-b-2 border-ink">
                <div className="mx-auto flex max-w-[1360px] items-stretch justify-between gap-[clamp(10px,3vw,40px)] px-[clamp(16px,4vw,40px)]">
                    <div className="flex min-w-0 items-stretch gap-[clamp(10px,3vw,40px)]">
                        <div className="flex items-center whitespace-nowrap py-4 font-heading text-[clamp(12px,2.6vw,14px)] font-extrabold uppercase tracking-[.16em]">
                            iLtc / Lists
                        </div>
                        <nav
                            aria-label="Sections"
                            className="hidden items-stretch sm:flex"
                        >
                            {tabs.map((tab) => (
                                <Link
                                    key={tab.to}
                                    to={tab.to}
                                    aria-current={
                                        tab.active ? "page" : undefined
                                    }
                                    className={`flex items-center px-[clamp(10px,3vw,18px)] py-4 font-heading text-sm ${
                                        tab.active
                                            ? "font-bold text-ink shadow-[inset_0_-3px_0_0_var(--color-accent)] hover:text-accent"
                                            : "font-medium text-neutral-600 hover:text-ink"
                                    }`}
                                >
                                    {tab.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden items-center sm:flex">
                        {langs.map((lang) => (
                            <Link
                                key={lang.label}
                                to={lang.to}
                                lang={lang.lang}
                                aria-current={lang.active ? "true" : undefined}
                                className={`px-2.5 py-2 text-xs font-semibold tracking-[.08em] ${
                                    lang.active
                                        ? "text-ink hover:text-accent"
                                        : "text-neutral-500 hover:text-ink"
                                }`}
                            >
                                {lang.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-11 w-11 cursor-pointer flex-col items-stretch justify-center gap-[5px] border-0 bg-transparent p-0"
                        >
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div className="hidden border-b border-neutral-300 sm:block">
                <div className="mx-auto max-w-[1360px] px-[clamp(16px,4vw,40px)] py-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                    {totalLabel}
                </div>
            </div>

            {menuOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Sections"
                    className="border-b-2 border-ink px-[clamp(16px,4vw,40px)] pb-5 sm:hidden"
                >
                    <div className="flex flex-col">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.to}
                                to={tab.to}
                                aria-current={tab.active ? "page" : undefined}
                                className={`border-b border-neutral-300 py-3.5 text-left font-heading text-[22px] tracking-[-.01em] ${
                                    tab.active
                                        ? "font-bold text-ink hover:text-accent"
                                        : "font-medium text-neutral-600 hover:text-ink"
                                }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2.5 pt-5">
                        <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                            {enActive ? "Language" : "语言"}
                        </span>
                        <div className="flex self-start border-2 border-ink">
                            {langs.map((lang) => (
                                <Link
                                    key={lang.label}
                                    to={lang.to}
                                    lang={lang.lang}
                                    aria-current={
                                        lang.active ? "true" : undefined
                                    }
                                    className={`px-[22px] py-3 text-xs font-semibold uppercase tracking-[.1em] ${
                                        lang.active
                                            ? "bg-ink text-bg"
                                            : "text-ink hover:bg-neutral-200"
                                    }`}
                                >
                                    {lang.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
