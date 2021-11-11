import React from "react";
import BanqueMenu from "../components/uiComponents/BanqueMenu";
import BanqueAcceuil from "../components/uiComponents/BanqueAcceuil";
import BanqueFooter from "../components/uiComponents/BanqueFooter";
import BoutonInscription from "../components/uiComponents/BoutonInscription";

export default function PageAccueil() {
  return (
    <div>
      <BanqueMenu>
        <BoutonInscription />
      </BanqueMenu>
      <BanqueAcceuil />
      <BanqueFooter />
    </div>
  );
}
