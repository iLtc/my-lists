import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import books from './books'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = books
    }

    render() {
        const cardGroups = this.state.data.map(group => <CardGroup key={group.title} title={group.title} items={group.items} />)

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>My Lists</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#" className="active">Books</Nav.Link>
                            {/* <Nav.Link href="#link">Game</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    {cardGroups}
                </Container>
            </div>

        );
    }
}

class CardGroup extends React.Component {
    render() {
        const cards = this.props.items.map(item => <Card key={item.title} {...item} />)

        return (
            <div>
                <div className="mt-4 mb-2 border-bottom">
                    <h2>{this.props.title}</h2>
                </div>
                <Row>
                    {cards}
                </Row>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <Col sm={12} md={6} lg={4}>
                <div className="image-container">
                    <a rel="nofollow" href={this.props.link}>
                        <img alt={this.props.title} src={this.props.image} />
                    </a>
                </div>
                <div className="title-container">
                    <a rel="nofollow" href={this.props.link}>
                        {this.props.title}
                    </a>
                </div>
                <div className="author-container">
                    by {this.props.author}
                </div>
            </Col>
        )
    }
}

export default App;
