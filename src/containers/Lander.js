import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap"; // Components provided by Bootstrap

import "./Lander.css";

export default function Lander(props) {
  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  function renderLoggedLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        <ul className="container row row-cols-3">
          <li class="col">
            <NavItem>
              <a href="https://sevebarrameda.com">Seve</a>
            </NavItem>
          </li>
          <li class="col">
            <LinkContainer to="/notes">
              <NavItem>Notes</NavItem>
            </LinkContainer>
          </li>
          <li class="col">
            <LinkContainer to="/settings">
              <NavItem>Settings</NavItem>
            </LinkContainer>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="Lander">
      {props.isAuthenticated ? renderLoggedLander() : renderLander()}
    </div>
  );
}
