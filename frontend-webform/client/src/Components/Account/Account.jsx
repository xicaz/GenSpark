import React from "react";
import { useNavigate } from "react-router";
import "./Account.css";

export default function Account(props) {
  const navigate = useNavigate();
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

    await props.setToggleFetch((prevState) => !prevState);
  };

  return (
    <div>
      {/* placeholders */}
      <h1 className="header">Welcome Back, </h1>
      <div className="account-body">{info}</div>

      <div className="arrow-container" onClick={handleClear}>
        <div className="arrow-left"></div>
      </div>
    </div>
  );
}
