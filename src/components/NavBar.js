import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";

const NavBar = () => {
  const location = useLocation();

  const booksActive = !location.pathname.includes("games");

  const enActive = !location.pathname.includes("zh");

  const booksLink = enActive ? "#/books" : "#/books/zh";
  const gamesLink = enActive ? "#/games" : "#/games/zh";
  const enLink = booksActive ? "#/books" : "#/games";
  const zhLink = booksActive ? "#/books/zh" : "#/games/zh";

  const brandTitle = enActive ? "My Lists" : "我的列表";
  const bookTitle = enActive ? "Books" : "书籍";
  const gameTitle = enActive ? "Games" : "游戏";

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>{brandTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={booksLink} active={booksActive}>
            {bookTitle}
          </Nav.Link>
          <Nav.Link href={gamesLink} active={!booksActive}>
            {gameTitle}
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href={enLink} active={enActive}>
            En
          </Nav.Link>
          <Nav.Link href={zhLink} active={!enActive}>
            中
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
