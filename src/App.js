import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import { HashRouter, Switch, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import books from './books'
import games from './games'

class App extends React.Component {
    render() {
        const bookCardGroups = (lang) => {
            return books.map(group => <CardGroup key={group.title} title={group.title} items={group.items} lang={lang} />)
        }
        const gameCardGroups = (lang) => {
            return games.map(group => <CardGroup key={group.title} title={group.title} items={group.items} lang={lang} />)
        }

        return (
            <HashRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>My Lists</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#/books">Books</Nav.Link>
                                <Nav.Link href="#/games">Game</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        <Switch>
                            <Route path="/books/zh">
                                {bookCardGroups("zh")}
                            </Route>
                            <Route path="/(|books)">
                                {bookCardGroups("en")}
                            </Route>
                            <Route path="/games/zh">
                                {gameCardGroups("zh")}
                            </Route>
                            <Route path="/games">
                                {gameCardGroups("en")}
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </HashRouter>
        );
    }
}

class CardGroup extends React.Component {
    render() {
        const cards = (lang) => {
            return this.props.items.map(item => <Card key={item.title} {...item} lang={lang} />)
        }

        return (
            <div>
                <div className="mt-4 mb-2 border-bottom">
                    <h2>{this.props.title}</h2>
                </div>
                <Row>
                    {cards(this.props.lang)}
                </Row>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        const idx = this.props.lang === "en" ? 0 : 1;

        return (
            <Col sm={12} md={6} lg={4}>
                <div className="image-container">
                    <a rel="nofollow" href={this.props.link[idx]}>
                        <img alt={this.props.title[idx]} src={this.props.image[idx]} />
                    </a>
                </div>
                <div className="title-container">
                    <a rel="nofollow" href={this.props.link[idx]}>
                        {this.props.title[idx]}
                    </a>
                </div>
                <div className="author-container">
                    by {this.props.author[idx]}
                </div>
            </Col>
        )
    }
}

export default App;
