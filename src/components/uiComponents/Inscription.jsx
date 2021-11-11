import { Button, Container, TextField, Stack, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";
import "../uiComponents/inscription.css";

const formTextField = {
  marginBottom: "1rem",
  width: "300px",
};
const ButtonStyle = {
  px: "1.5rem !important",
};

const Inscription = () => {
  let history = useHistory();

  const donneeVide = {
    firstName: "",
    name: "",
    email: "",
    password: "",
    username: "",
  };

  const [donnee, setDonne] = useState(donneeVide);
  const [error, setError] = useState(null);
  const postData = useCallback(() => {
    fetch("http://localhost:8800/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donnee),
    })
      .then((response) => response.json())
      .catch(setError);
  }, [donnee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = donnee.firstName
      .slice(0, 3)
      .concat(donnee.name.slice(0, 5))
      .split(" ")
      .join("")
      .toLocaleLowerCase();
    donnee.username = username;
    postData();
    setDonne(donneeVide);
    alert(`Merci ${donnee.firstName} ${donnee.name} pour votre inscription.`);
    history.goBack();
    history.replace("/", `/connection/${donnee.id}/${donnee.firstName}`);
  };

  return (
    <Container
      sx={{
        backgroundImage: "url(/Images/1.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        my: 5,
        backgroundColor: "#9A8F8F",
        height: "65vh",
        display: "flex",
        alignItems: "center",
        borderRadius: 3,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px - 8px",
        justify: "center",
        flexDirection: "column",
      }}
    >
      <form className="form-inscription" onSubmit={handleSubmit}>
        <Typography
          variant="h3"
          align="center"
          component="h1"
          sx={{
            letterSpacing: 2,
            color: "white",
            mb: 2,
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
            borderRadius: 2,
            px: 2,
          }}
        >
          INSCRIPTION
        </Typography>
        <TextField
          sx={formTextField}
          label="First Name"
          variant="filled"
          type="text"
          id="firstName"
          name="firstName"
          required
          value={donnee.firstName}
          onChange={(e) => setDonne({ ...donnee, firstName: e.target.value })}
        />
        <TextField
          sx={formTextField}
          label="name"
          id="name"
          name="name"
          type="text"
          variant="filled"
          required
          value={donnee.name}
          onChange={(e) => setDonne({ ...donnee, name: e.target.value })}
        />
        <TextField
          sx={formTextField}
          label="email"
          id="email"
          variant="filled"
          type="email"
          name="email"
          required
          value={donnee.email}
          onChange={(e) => setDonne({ ...donnee, email: e.target.value })}
        />
        <TextField
          sx={formTextField}
          label="Password"
          id="password"
          name="password"
          variant="filled"
          type="password"
          required
          value={donnee.password}
          onChange={(e) => setDonne({ ...donnee, password: e.target.value })}
        />
        <Stack direction="row" spacing={5} sx={{ mt: 3 }}>
          <Button
            sx={ButtonStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            S'inscrire
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Inscription;
