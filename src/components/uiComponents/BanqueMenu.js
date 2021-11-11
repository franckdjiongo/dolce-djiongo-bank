import "./BanqueMenu.css";

const BanqueMenu = ({ children }) => {
  return (
    <div className="banque-menu">
      <div className="banque-container-menu">
        <div className="banque-logo">
          <figure>
            <img
              src="../Images/Banque_DD_Logo.png"
              alt=""
              title="DD Banque"
            ></img>
          </figure>
        </div>
        <div
          style={{
            marginTop: "0.5rem",
            marginLeft: "2rem",
            color: "#9c3d54",
            fontWeight: "600",
            fontSize: "1.8rem",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          }}
        >
          <h1>Bienvenue à la DD Banque</h1>
        </div>
        <div className="banque-menu-link">
          <div className="banque-menu-link-navLink">
            <nav>
              <ul>
                <li>{/* <a href="#" ref="noopener "></a> */}</li>
              </ul>
            </nav>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BanqueMenu;
