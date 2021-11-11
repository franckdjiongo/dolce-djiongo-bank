import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useHistory, useParams } from "react-router";

const styleSpan = { color: "#9c3d54" };
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[900]),
  backgroundColor: red[900],
  "&:hover": {
    backgroundColor: red[500],
  },
}));

const Connexion = () => {
  let history = useHistory();
  let { userID } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8800/api/users/${userID}`)
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }, [data, userID]);

  const onClick = () => {
    alert(`Aurevoir Mr/Mme ${data.firstName} ${data.name}.`);
    history.goBack();
    history.replace("/", `/connection/${data._id}/${data.firstName}`);
  };

  return (
    <Container
      sx={{
        px: 15,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        component="h1"
        sx={{
          letterSpacing: 2,
          px: 2,
          pt: 3,
          mb: 2,
          mt: 8,
        }}
      >
        <span>Bonjour</span>{" "}
        <span style={styleSpan}>
          {data.firstName}
          <br />
          {data.name}
        </span>
      </Typography>
      <Box
        sx={{
          height: "50vh",
          mb: 3,
          mt: -6,
        }}
      >
        <Stack direction="column" spacing={3} alignItems="center">
          <Stack
            direction="row"
            spacing={5}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              borderRadius: 3,
              p: 5,
              mt: 15,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Typography variant="h5" align="center" component="h5">
              Solde du compte: <span style={styleSpan}>2000$</span>
            </Typography>
            <Typography variant="h5" align="center" component="h5">
              N° de compte: <span style={styleSpan}>8541-8954</span>
            </Typography>
            <Typography variant="h5" align="center" component="h5">
              Programme bancaire:{" "}
              <span style={styleSpan}>Programme performance</span>
            </Typography>
          </Stack>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              borderRadius: 3,
              p: 5,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Typography variant="h5" align="center" component="h5">
              Fonds disponible: <span style={styleSpan}>4000$</span>
            </Typography>
            <Typography variant="h5" align="center" component="h5">
              N° institution: <span style={styleSpan}>001</span>
            </Typography>
            <Typography variant="h5" align="center" component="h5">
              N° succursale: <span style={styleSpan}>85643</span>
            </Typography>
          </Stack>
          <ColorButton
            sx={{
              width: "fit-content !important",
              py: "1rem !important",
              px: "2rem !important",
              alignItem: "center",
            }}
            variant="contained"
            startIcon={<CancelIcon />}
            onClick={onClick}
          >
            Déconnecter
          </ColorButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Connexion;
