import { React, useState } from "react";
import Account from "../Components/Account/Account";
import Form from "../Components/WebForm/WebForm";

export default function Main() {
  const [completed, setCompleted] = useState(false);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div>
      {!completed ? (
        <Form
          inputs={inputs}
          setInputs={setInputs}
          completed={completed}
          setCompleted={setCompleted}
        />
      ) : (
        <Account
          inputs={inputs}
          setInputs={setInputs}
          completed={completed}
          setCompleted={setCompleted}
        />
      )}
    </div>
  );
}
