import BanqueFormConnection from "../uiComponents/BanqueFormConnection";

import("./BanqueBackgrounImage.css");

const BanqueBackgrounImage = () => {
  return (
    <div className="banque-backgroundImage-container">
      <div
        className="banque-background-image"
        style={{
          // backgroundImage: 'url(${process.env.PUBLIC_URL}/slide1.png)'
          backgroundImage: "url(/Images/1.png)",
        }}
      >
        <BanqueFormConnection />
      </div>
    </div>
  );
};

export default BanqueBackgrounImage;
