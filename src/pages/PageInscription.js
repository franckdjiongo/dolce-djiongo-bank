import React from "react";
import BanqueFooter from "../components/uiComponents/BanqueFooter";
import BanqueMenu from "../components/uiComponents/BanqueMenu";
import Inscription from "../components/uiComponents/Inscription";

export default function PageInscription() {
  return (
    <>
      <BanqueMenu />
      <Inscription />
      <BanqueFooter />
    </>
  );
}
