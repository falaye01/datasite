import { useContext } from "react";
import { UserContext } from "../StoredContext";
import './Navsection.css';



function Navsection() {
  const { user, login } = useContext(UserContext);
  console.log("this code is currently running");
  


  return (
    <div className="card">
      <h2 className="welcome">{login ? "Welcome back, Username!" : "Welcome back, Guest!"}</h2>
      <p className="verify">Your account has been verified successfully</p>
      <div className="btn">
      <button className="account-type">{user ? "Fund Wallet" : "Admin Account"}</button>
      </div>
    </div>
  );
}

export default Navsection;
