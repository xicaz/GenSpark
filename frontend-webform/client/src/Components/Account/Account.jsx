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
    const clear = await props.setInputs({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });

    await props.setCompleted(false);

    if (clear) {
      await props.setToggleFetch((prevState) => !prevState);
    }
  };

  return (
    <div>
      {/* placeholders */}
      <header className="header">Account Information </header>
      <div className="account-body">{info}</div>

      <div className="arrow-container" onClick={handleClear}>
        <div className="arrow-left"></div>
      </div>
    </div>
  );
}
