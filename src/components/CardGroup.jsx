import BookCard from "./BookCard";
import GameCard from "./GameCard";
import React from "react";

const CardGroup = (props) => {
    const zh = props.lang === "zh";
    const count = props.items.length;
    const meta = zh
        ? `${count} ${props.isGame ? "款" : "本"}`
        : `${count} ${count === 1 ? "title" : "titles"}`;

    const cards = props.isGame
        ? props.items.map((item) => (
              <GameCard key={item.title} {...item} lang={props.lang} />
          ))
        : props.items.map((item) => (
              <BookCard key={item.title} {...item} lang={props.lang} />
          ));

    return (
        <section className="pt-[clamp(36px,5vw,64px)]">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b-2 border-ink pb-2.5">
                <h2 className="font-heading text-[clamp(30px,7vw,52px)] font-extrabold uppercase leading-[.94] tracking-[-.03em] [text-wrap:balance]">
                    {props.title}
                </h2>
                <span className="whitespace-nowrap pb-[5px] text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                    {meta}
                </span>
            </div>
            <div
                className={
                    props.isGame
                        ? "grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-[clamp(16px,2vw,32px)] gap-y-[52px] pt-8"
                        : "grid grid-cols-[repeat(auto-fill,minmax(min(150px,46%),1fr))] gap-x-[clamp(14px,2vw,30px)] gap-y-[clamp(24px,3vw,40px)] pt-8"
                }
            >
                {cards}
            </div>
        </section>
    );
};

export default CardGroup;
