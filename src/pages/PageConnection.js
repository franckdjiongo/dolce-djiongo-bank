import React from "react";
import BanqueFooter from "../components/uiComponents/BanqueFooter";
import BanqueMenu from "../components/uiComponents/BanqueMenu";
import Connexion from "../components/uiComponents/Connexion";

export default function PageConnection() {
  return (
    <>
      <BanqueMenu />
      <Connexion />
      <BanqueFooter />
    </>
  );
}
