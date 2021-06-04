import { Col } from "react-bootstrap";
import React from "react";
import classes from "./GameCard.module.css"

const GameCard = (props) => {
    const idx = props.lang === "en" ? 0 : 1;

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <div className={classes["image-container"]}>
                <a rel="nofollow" href={props.link[idx]}>
                    <img alt={props.title[idx]} src={props.image[idx]} className={classes.img} />
                </a>
            </div>
            <div className="title-container">
                <a rel="nofollow" href={props.link[idx]}>
                    {props.title[idx]}
                </a>
            </div>
            <div className={classes["author-container"]}>
                by {props.author[idx]}
            </div>
        </Col>
    )
}

export default GameCard;