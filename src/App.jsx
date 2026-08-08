import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardGroup from "./components/CardGroup";
import NavBar from "./components/NavBar";

import books from "./books";
import games from "./games";

const App = () => {
    const bookCardGroups = (lang) =>
        books.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={false}
            />
        ));
    const gameCardGroups = (lang) =>
        games.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={true}
            />
        ));

    return (
        <BrowserRouter>
            <NavBar />
            <main className="mx-auto max-w-[1360px] px-[clamp(16px,4vw,40px)] pb-[120px]">
                <Routes>
                    <Route
                        path="/books/zh"
                        element={<>{bookCardGroups("zh")}</>}
                    />
                    <Route
                        path="/books"
                        element={<>{bookCardGroups("en")}</>}
                    />
                    <Route
                        path="/games/zh"
                        element={<>{gameCardGroups("zh")}</>}
                    />
                    <Route
                        path="/games"
                        element={<>{gameCardGroups("en")}</>}
                    />
                    <Route path="/" element={<>{bookCardGroups("en")}</>} />
                    <Route
                        path="*"
                        element={
                            <div className="pt-[clamp(36px,5vw,64px)]">
                                <h1 className="font-heading text-[clamp(30px,7vw,52px)] font-extrabold uppercase leading-[.94] tracking-[-.03em]">
                                    404
                                </h1>
                                <p className="text-[13px] text-neutral-600">
                                    Not Found
                                </p>
                            </div>
                        }
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
