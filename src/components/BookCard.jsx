import React from "react";

const BookCard = (props) => {
    const isDev = import.meta.env.DEV;
    const idx = props.lang === "en" ? 0 : 1;

    return (
        <article className="flex flex-col gap-3.5">
            <div className="cover-frame relative aspect-[2/3] overflow-hidden">
                <img
                    alt=""
                    src={`${isDev ? "/" : "/cdn-cgi/image/width=320/"}images/books/${props.image[idx]}`}
                    loading="lazy"
                    onError={(event) => {
                        event.target.style.display = "none";
                    }}
                    className="absolute inset-0 block h-full w-full object-cover"
                />
            </div>
            <div className="flex min-w-0 flex-col gap-[3px]">
                <h3 className="font-heading text-[15px] font-bold leading-[1.25] tracking-[-.012em] [text-wrap:pretty]">
                    {props.title[idx]}
                </h3>
                <p className="text-[13px] leading-[1.4] text-neutral-600">
                    {props.author[idx]}
                </p>
            </div>
        </article>
    );
};

export default BookCard;
