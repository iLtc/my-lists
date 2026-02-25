import { Col, Card } from "react-bootstrap";
import React from "react";
import classes from "./BookCard.module.css";
import { Buffer } from "buffer";

const BookCard = (props) => {
    const isDev = import.meta.env.DEV;
    const idx = props.lang === "en" ? 0 : 1;
    const isBase64 = props.isBase64 === true;

    const title = isBase64
        ? Buffer.from(props.title[idx], "base64").toString("utf8")
        : props.title[idx];
    const author = isBase64
        ? Buffer.from(props.author[idx], "base64").toString("utf8")
        : props.author[idx];
    const image = isBase64
        ? Buffer.from(props.image[idx], "base64").toString("utf8")
        : props.image[idx];

    return (
        <Col sm={12} md={6} lg={4} className={classes["card-container"]}>
            <Card className={classes.card}>
                <div className={classes.cardInner}>
                    <div className={classes["image-container"]}>
                        <Card.Img
                            alt={title}
                            src={`${isDev ? "" : "/cdn-cgi/image/width=150/"}images/books/${image}`}
                            className={classes.img}
                            loading="lazy"
                        />
                    </div>
                    <Card.Body className={classes["card-body"]}>
                        <Card.Title className={classes.title}>
                            {title}
                        </Card.Title>
                        <Card.Text className={classes.author}>
                            by {author}
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default BookCard;
