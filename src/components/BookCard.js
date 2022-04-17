import { Col } from "react-bootstrap";
import React from "react";
import classes from "./BookCard.module.css"

const BookCard = (props) => {
    const idx = props.lang === "en" ? 0 : 1;

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <div className={classes["image-container"]}>
                <img alt={props.title[idx]} src={props.image[idx]} className={classes.img} />
            </div>
            <div className="title-container">
                {props.title[idx]}
            </div>
            <div className={classes["author-container"]}>
                by {props.author[idx]}
            </div>
        </Col>
    )
}

export default BookCard;