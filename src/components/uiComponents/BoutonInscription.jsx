import React from "react";
import { useHistory } from "react-router-dom";
import AppRegistration from "@mui/icons-material/AppRegistration";

const BoutonInscription = () => {
  let history = useHistory();

  return (
    <div className="banque-menu-btnConnection">
      <button
        className="banque-menu-bouton"
        onClick={() => history.push("/inscription")}
      >
        <AppRegistration fontSize="large" />
        &nbsp;Inscription
      </button>
    </div>
  );
};

export default BoutonInscription;
