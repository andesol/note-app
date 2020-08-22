import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { user, handleLogout } = useContext(LoginContext);
  const padding = {
    padding: 5
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Note app
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} style={padding} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} style={padding} to="/notes">
          Notes
        </Nav.Link>
      </Nav>
      {user && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "1.5rem", color: "white" }}>
            {user.name} logged in
          </span>
          <Button variant="danger" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
