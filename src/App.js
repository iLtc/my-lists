import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { HashRouter, Routes, Route } from "react-router-dom";
import CardGroup from "./components/CardGroup";
import NavBar from "./components/NavBar";

import books from "./books";
import games from "./games";

const App = () => {
    const bookCardGroups = (lang) => {
        return books.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={false}
            />
        ));
    };
    const gameCardGroups = (lang) => {
        return games.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={true}
            />
        ));
    };

    return (
        <HashRouter>
            <div>
                <NavBar />
                <Container>
                    <Routes>
                        <Route
                            path="/books/zh"
                            element={<>{bookCardGroups("zh")}</>}
                        />
                        <Route
                            path="/books"
                            element={<>{bookCardGroups("en")}</>}
                        />
                        <Route
                            path="/games/zh"
                            element={<>{gameCardGroups("zh")}</>}
                        />
                        <Route
                            path="/games"
                            element={<>{gameCardGroups("en")}</>}
                        />
                        <Route path="/" element={<>{bookCardGroups("en")}</>} />
                        <Route path="*" element={<>404 Not Found</>} />
                    </Routes>
                </Container>
            </div>
        </HashRouter>
    );
};

export default App;
