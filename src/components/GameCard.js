import { Col, Card } from "react-bootstrap";
import React from "react";
import classes from "./GameCard.module.css"

const GameCard = (props) => {
    const idx = props.lang === "en" ? 0 : 1;

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <Card>
                <Card.Img variant="top" src={props.image[idx]} alt={props.title[idx]} />
                <Card.Body>
                    <Card.Title>
                        <a rel="nofollow" href={props.link[idx]}>
                            {props.title[idx]}
                        </a>
                    </Card.Title>
                    <Card.Text>
                        by {props.author[idx]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default GameCard;