import React from "react";
import "./AutomatedBank.css";

function AutomatedBank({ bank, setBank }) {
  console.log(`Bank selected: ${bank}`);

  const getBankDetails = (bankName) => {
    switch (bankName) {
      case "moniepoint":
        return { accountName: "moniepoint Services", bankName: "moniepoint" };
      case "Access":
        return { accountName: "Access Bank Services", bankName: "Access" };
      case "wema":
        return { accountName: "wema Bank Services", bankName: "wema" };
      case "9psb":
        return { accountName: "9PSB Services", bankName: "9psb" };
      case "Safe Haven":
        return { accountName: "Safe Haven Services", bankName: "Safe Haven" };
      default:
        return { accountName: "N/A", bankName: "N/A" };
    }
  };

  const { accountName, bankName } = getBankDetails(bank || "unknown");

  return (
    <div className="automated">
      <h1 className="transfer">Automated Bank Transfer</h1>
      <h1 className="make">
        MAKE A TRANSFER TO THIS UNIQUE ACCOUNT NUMBER GIVEN TO YOU AND YOUR WALLET WILL BE CREDITED IMMEDIATELY
      </h1>
      <p className="acct-no">
        ACCOUNT NUMBER: <strong>1234567890</strong>
      </p>
      <p>
        BANK NAME: <span>{bankName}</span>
      </p>
      <p>
        ACCOUNT NAME: <span>{accountName}</span>
      </p>
      <p>
        CHARGES: <span>1.3%</span>
      </p>
    </div>
  );
}

export default AutomatedBank;
