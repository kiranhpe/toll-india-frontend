import React from "react";

export const Header = () => {
  return (
    <nav className="navbar is-dark" role="navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="is-size-3 is-uppercase">Toll India</h1>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Kiran's Project</a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item" href="https://kiranhpe.github.io/covid19-react/#/"
                target="_blank">
                Covid-19 Statistics
              </a>
              <a className="navbar-item" href="http://toll-india.herokuapp.com/api/toll/"
                target="_blank">
                Toll India API
              </a>
            </div>
        </div>
      </div>
    </nav>
  );
};
