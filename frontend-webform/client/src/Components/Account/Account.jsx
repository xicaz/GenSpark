import React from "react";
import "./Account.css";

export default function Account(props) {
  let accountInfo = { ...props.inputs };
  let info = [];

  console.log(accountInfo);

  for (const [key, value] of Object.entries(accountInfo)) {
    if (!key.includes("password"))
      info.push(<p className="account-info">{(key, value)}</p>);
  }

  const handleClear = async (e) => {
    await props.setInputs({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });

    await props.setCompleted(false);
  };

  return (
    <div>
      {/* placeholders */}
      <header className="header">Account Information </header>
      <div className="account-body">{info}</div>

      <div className="arrow-container" onClick={handleClear}>
        <div className="button-container"></div>
        <img src="./button.png" alt="button-icon" width={50} />
      </div>
    </div>
  );
}
