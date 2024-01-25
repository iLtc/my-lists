import BookCard from "./BookCard";
import GameCard from "./GameCard";
import React from "react";
import { Row } from "react-bootstrap";

const CardGroup = (props) => {
    const cards = props.isGame
        ? props.items.map((item) => (
              <GameCard key={item.title} {...item} lang={props.lang} />
          ))
        : props.items.map((item) => (
              <BookCard key={item.title} {...item} lang={props.lang} />
          ));

    return (
        <div>
            <div className="mt-4 mb-2 border-bottom">
                <h2>{props.title}</h2>
            </div>
            <Row>{cards}</Row>
        </div>
    );
};

export default CardGroup;
