import { Col } from "react-bootstrap";
import React from "react";
import classes from "./BookCard.module.css"

const BookCard = (props) => {
    const idx = props.lang === "en" ? 0 : 1;
    const isBase64 = props.isBase64 === true;

    const title = isBase64 ? Buffer.from(props.title[idx], 'base64').toString('utf8') : props.title[idx];
    const author = isBase64 ? Buffer.from(props.author[idx], 'base64').toString('utf8') : props.author[idx];
    const image = isBase64 ? Buffer.from(props.image[idx], 'base64').toString('utf8') : props.image[idx];

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <div className={classes["image-container"]}>
                <img alt={title} src={`images/books/${image}`} className={classes.img} />
            </div>
            <div className="title-container">
                {title}
            </div>
            <div className={classes["author-container"]}>
                by {author}
            </div>
        </Col>
    )
}

export default BookCard;