import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

import styles from "./LoginScreen.module.css";

const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
      const lastPath = localStorage.getItem('lastPath') || '/';

      dispatch({ 
        type: types.login, 
        payload: { name: 'Daniel' }
      })
      history.replace(lastPath);
    }
    return (
    <div>
      <button
        onClick={handleLogin}
        className={`btn btn-primary ${styles.loginButton}`}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginScreen;
