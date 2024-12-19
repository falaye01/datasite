
import { useState } from "react";
import Menu from "../Menu/Menu";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState); 
  };


  return (
    <>

      {menu? <Menu setMenu={setMenu}/>: null}

      <div className="nav-section">
        <button className="navbar"  onClick={handleMenu}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </button>
        <div className="container">
          <div className="noticefication">44</div>
          <div className="username">F</div>
        </div>
      </div>
    </>
  );
}

export default Header;

