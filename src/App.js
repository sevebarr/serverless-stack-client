// the App container is the container for the entire app

import React, { useState, useEffect } from "react";
import "./App.css";
import { Nav, Navbar, NavItem } from "react-bootstrap"; // Components provided by Bootstrap
import Routes from "./Routes";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap"; // Allows App to route to the required link without refreshing the browser
import { Auth } from "aws-amplify";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          {/* allows container to be fluid */}
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
              {/* Clicking Scratch will Route you to "/" page */}
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {/* the collapse ensures that on mobile devices the two links will be collapsed  */}
            <Nav pullRight>
              {isAuthenticated ? (
                // if user is authenticated, display the Settings and Logout NavItems on the NavBar
                <>
                  <li role="presentation">
                    <a href="https://sevebarrameda.com">Seve</a>
                  </li>
                  <LinkContainer to="/notes">
                    <NavItem>Notes</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/settings">
                    {/* wrapping nav items with link containers to be routed. So this will send the <to> tag to Routes.js Component to be routed */}
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
              ) : (
                // else if not authenticated, display the Sign Up or Login Page
                <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    )
  );
}

export default withRouter(App);
