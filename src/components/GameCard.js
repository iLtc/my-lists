import { Col, Card, ListGroup } from "react-bootstrap";
import React from "react";
import classes from "./GameCard.module.css";

const GameCard = (props) => {
    const isDev = process.env.NODE_ENV === "development";
    const idx = props.lang === "en" ? 0 : 1;
    const hasDLC = props.dlc && props.dlc.length > 0;
    const DLCItems =
        props.dlc &&
        props.dlc.map((item, index) => (
            <ListGroup.Item key={index} className={classes.dlcItem}>
                <small className={classes.dlcLabel}>DLC:</small> {item[idx]}
            </ListGroup.Item>
        ));

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <Card className={classes.card}>
                <div className={classes["image-container"]}>
                    <Card.Img
                        variant="top"
                        src={`${isDev ? "" : "/cdn-cgi/image/width=480/"}images/games/${props.image[idx]}`}
                        alt={props.title[idx]}
                        loading="lazy"
                        className={classes.img}
                    />
                </div>
                <Card.Body className={classes["card-body"]}>
                    <Card.Title className={classes.title}>
                        {props.title[idx]}
                    </Card.Title>
                    <Card.Text className={classes.author}>
                        by {props.author[idx]}
                    </Card.Text>
                </Card.Body>
                {hasDLC && (
                    <ListGroup className={classes.dlcContainer}>
                        {DLCItems}
                    </ListGroup>
                )}
            </Card>
        </Col>
    );
};

export default GameCard;
