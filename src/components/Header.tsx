import React from "react";

export const Header = () => {
  return (
    <nav
      className="navbar is-dark" role="navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="is-size-3 is-uppercase">Toll India</h1>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a href="" className="is-primary is-size-4">
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};
