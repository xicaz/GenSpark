import React, { useState } from "react";
import "../WebForm/WebForm.css";
import { Link } from "react-router-dom";

export default function Form() {
  const [completed, setCompleted] = useState(false);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    while (inputs.password.valueOf() === inputs.passwordConfirm.valueOf()) {
      setInputs({
        ...inputs,
      });
      setCompleted(true);
      if (completed) {
        alert("submitted");
      }
    }
  };

  console.log(inputs.password.valueOf());

  return (
    <>
      <div className="container">
        <div>
          <div>
            <img
              src="./derivativestudio.png"
              alt="logo"
              width={300}
              // srcset="derivativestudio.png 10w, derivativestudio.png 20w"
            />
          </div>
          <form action="/action_page.php" onSubmit={handleSubmit}>
            <label htmlFor="Registration">Register</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={inputs.firstname}
              required
            />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={inputs.lastname}
              required
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.password}
              required
            />
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.passwordConfirm}
              required
            />

            <div className="emailcheck-container">
              <input
                type="checkbox"
                id="emailcheck"
                name="emailcheck"
                value="emailcheck"
              />

              <label htmlFor="emailcheck">
                I would like to be the first to receive updates about Derivative
                Studios exclusive new product drops and other inspirational
                content.
              </label>
            </div>
            <div className="policy-container">
              <input
                type="checkbox"
                id="policy"
                name="policy"
                value="policy"
                required
              />{" "}
              <label htmlFor="policy">
                I confirm that I have read and understood the membership policy
                and privacy policy.
              </label>
            </div>

            <input type="submit" value="Submit" />
            <div className="accountlinks">
              <label>
                <Link to="/" exact>
                  login
                </Link>
              </label>
              <label htmlFor="newpassword">
                <Link to="/" exact>
                  forgot password?
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
