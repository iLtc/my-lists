import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import { HashRouter, Switch, Route } from "react-router-dom";
import CardGroup from './components/CardGroup';
import NavBar from './components/NavBar';

import books from './books'
import games from './games'

const App = () => {
    const bookCardGroups = (lang) => {
        return books.map(group => <CardGroup key={group.title} title={group.title} items={group.items} lang={lang} isGame={false} />)
    }
    const gameCardGroups = (lang) => {
        return games.map(group => <CardGroup key={group.title} title={group.title} items={group.items} lang={lang} isGame={true} />)
    }

    return (
        <HashRouter>
            <div>
                <NavBar/>
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

export default App;
