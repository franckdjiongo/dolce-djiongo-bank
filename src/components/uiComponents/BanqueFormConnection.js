import { AccountCircleOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import "./BanqueFormConnection.css";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";

const BanqueFormConnection = () => {
  let history = useHistory();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const postLogin = useCallback(() => {
    fetch("http://localhost:8800/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) =>
        history.push(
          `/connection/${data._id}/${data.firstName.split(" ").join("")}`
        )
      )
      .catch(setError);
  }, [data, history]);

  const submit = (event) => {
    event.preventDefault();
    postLogin();
    if (error)
      return alert(
        `Désolé ${data.username} vos données sont incorrectes. Veillez réessayez s'il vous plait.`
      );
  };
  return (
    <div className="banque-connection">
      <form className="banque-form" onSubmit={submit}>
        <h3 style={{ color: "#fff" }}>Connexion</h3>
        <TextField
          label="username"
          required
          id="username"
          name="username"
          className="inputUsername"
          type="text"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          style={{ border: "solid 3px#A2453D", borderRadius: "8px" }}
        />
        <TextField
          label="password"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          style={{
            border: "solid 3px#A2453D",
            borderRadius: "8px",
            width: "260px",
            marginTop: "1.5rem",
          }}
        />

        <div className="banque-menu-btnConnection">
          <button type="submit" className="banque-menu-boutonConnexion">
            <AccountCircleOutlined fontSize="large" />
            &nbsp;Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default BanqueFormConnection;
