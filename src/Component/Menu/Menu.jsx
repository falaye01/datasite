import "./Menu.css";
import "boxicons"
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";


function Menu({ setMenu }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard")

  const handleClose = () => {
    setMenu(false); 
  };

  const handleMenuClick = (menuName) =>{
    setActiveMenu(menuName)
  }

  return (
    <div className="menu">
      <button className="nav" aria-expanded="true" onClick={handleClose}>
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </button>
      <div className="details">
        <div className="logo">F</div>
        <p> <strong className="comrade">COMRADE</strong> <br /> Account Role</p>
      </div>
      <div className="general-container">
        <h3>GENERAL</h3>
        <ul>
          <li className={activeMenu === "Dashboard"? "active": ""} onClick={()=>handleMenuClick("Dashboard")}><i className="bx bxs-home"></i><span>DashBoard</span></li>
          <li className={activeMenu === "Buy Data"? "active" : ""} onClick={()=>handleMenuClick("Buy Data")}><i className="bx bxs-shopping-bag"></i> <span>Buy Data</span></li>
          <li className={activeMenu === "Buy Airtime"? "active": ""} onClick={()=>handleMenuClick("Buy Airtime")}><i className="bx bxs-phone-call"></i> <span> Buy Airtime</span></li>
          <li className={activeMenu === "Cable Sub"? "active": ""} onClick={()=>handleMenuClick("Cable Sub")}><i className="bx bxs-bulb"></i> <span>Cable Sub</span></li>
          <li className={activeMenu === "Fund Wallet"? "active": ""} onClick={()=>handleMenuClick("Fund Wallet")}><i className="bx bxs-credit-card"></i> <span>Fund Wallet</span></li>
          <li className={activeMenu === "Transaction Calculator"? "active": ""} onClick={()=>handleMenuClick("Transaction Calculator")}><i className="bx bxs-calculator"></i> <span>Transaction Calculator</span></li>
          <li className={activeMenu === "Pricing"? "active": ""} onClick={()=> handleMenuClick("Pricing")}><i className="bx bxs-purchase-tag"></i> <span>Pricing</span></li>
        </ul>
      </div>
      <div className="general-container">
        <h3>MANAGEMENT</h3>
        <ul>
          <li className={activeMenu === "Transaction"? "active": ""}  onClick={()=> handleMenuClick("Transaction")}> <i className="bx bxs-receipt"></i><span>Transaction</span></li>
          <li className={activeMenu === "Setting"? "active": ""} onClick={()=> handleMenuClick("Setting")}><i className="bx bxs-cog"></i><span>Setting</span></li>
          <li className={activeMenu === "App"? "active": ""} onClick={()=> handleMenuClick("App")}><i className="bx bxs-mobile"></i> <span>App</span></li>
        </ul>
      </div>

      <div className="general-container">
        <h3>CUSTOMER CARE</h3>
        <ul>
          <li className={activeMenu === "Transaction"? "active": ""} onClick={()=> handleMenuClick("Transaction")}> <i className="bx bxs-receipt"></i><span>Transaction</span></li>
          <li className={activeMenu === "Credit/Debit"? "active": ""} onClick={()=> handleMenuClick("Credit/Debit")}><i className="bx bxs-wallet"></i><span>Credit/Debit</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
