import { Col } from "react-bootstrap";
import React from "react";

const Card = (props) => {
    const idx = props.lang === "en" ? 0 : 1;

    return (
        <Col sm={12} md={6} lg={4}>
            <div className="image-container">
                <a rel="nofollow" href={props.link[idx]}>
                    <img alt={props.title[idx]} src={props.image[idx]} />
                </a>
            </div>
            <div className="title-container">
                <a rel="nofollow" href={props.link[idx]}>
                    {props.title[idx]}
                </a>
            </div>
            <div className="author-container">
                by {props.author[idx]}
            </div>
        </Col>
    )
}

export default Card;