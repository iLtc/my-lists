import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";
import classes from "./GameCard.module.css";

const GameCard = (props) => {
    const isDev = process.env.NODE_ENV === "development";
    const idx = props.lang === "en" ? 0 : 1;
    const hasDLC = props.dlc && props.dlc.length > 0;
    const DLCItems =
        props.dlc &&
        props.dlc.map((item) => (
            <ListGroupItem>DLC: {item[idx]}</ListGroupItem>
        ));

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <Card>
                <Card.Img
                    variant="top"
                    src={`${isDev ? "/" : "/cdn-cgi/image/width=480/"}images/games/${props.image[idx]}`}
                    alt={props.title[idx]}
                />
                <Card.Body>
                    <Card.Title>{props.title[idx]}</Card.Title>
                    <Card.Text>by {props.author[idx]}</Card.Text>
                </Card.Body>
                {hasDLC && (
                    <ListGroup className="list-group-flush">
                        {DLCItems}
                    </ListGroup>
                )}
            </Card>
        </Col>
    );
};

export default GameCard;
