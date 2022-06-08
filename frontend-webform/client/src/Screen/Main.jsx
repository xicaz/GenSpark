import { React, useState } from "react";
import Account from "../Components/Account/Account";
import Form from "../Components/WebForm/WebForm";

export default function Main() {
  const [toggleFetch, setToggleFetch] = useState(false);
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
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      )}
    </div>
  );
}
