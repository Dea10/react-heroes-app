import React, { useContext } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const history = useHistory();
  const { user, dispatch } = useContext( AuthContext );

  const handleLogout = () => {
    dispatch({
      type: types.logout
    });
    history.replace('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
              { user.name }
            </span>
            <button 
              className="nav-item nav-link btn" 
              onClick={ handleLogout }
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
