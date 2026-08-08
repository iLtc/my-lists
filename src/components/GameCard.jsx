import React from "react";

const GameCard = (props) => {
    const isDev = import.meta.env.DEV;
    const idx = props.lang === "en" ? 0 : 1;
    const hasDLC = props.dlc && props.dlc.length > 0;
    const dlcLabel = idx === 1 ? "追加内容" : "DLC";

    return (
        <article className="flex flex-col gap-3.5">
            <div className="cover-frame relative aspect-video overflow-hidden">
                <img
                    alt=""
                    src={`${isDev ? "/" : "/cdn-cgi/image/width=480/"}images/games/${props.image[idx]}`}
                    loading="lazy"
                    onError={(event) => {
                        event.target.style.display = "none";
                    }}
                    className="absolute inset-0 block h-full w-full object-cover"
                />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="font-heading text-[clamp(17px,2vw,19px)] font-bold leading-[1.18] tracking-[-.02em] [text-wrap:pretty]">
                    {props.title[idx]}
                </h3>
                <p className="text-[13px] leading-[1.4] text-neutral-600">
                    {props.author[idx]}
                </p>
                {hasDLC && (
                    <div className="mt-2 flex flex-wrap items-baseline gap-2 border-t border-neutral-300 pt-2">
                        <span className="flex-none text-[10px] font-semibold uppercase tracking-[.16em] text-neutral-600">
                            {dlcLabel}
                        </span>
                        <ul
                            aria-label={dlcLabel}
                            className="m-0 flex list-none flex-wrap gap-1.5 p-0"
                        >
                            {props.dlc.map((item, index) => (
                                <li
                                    key={index}
                                    className="border border-neutral-400 px-[7px] py-1 text-[10px] font-semibold uppercase tracking-[.1em] text-ink"
                                >
                                    {item[idx]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
};

export default GameCard;
