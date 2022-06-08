import React from "react";
import "../WebForm/WebForm.css";
import { Link, useParams } from "react-router-dom";
// import { useNavigate } from "react-router";

export default function Form(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setInputs({
      ...props.inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      props.inputs.password.valueOf() === props.inputs.passwordConfirm.valueOf()
    ) {
      const login = await props.setInputs({
        ...props.inputs,
      });
    }
    await props.setCompleted(true);
  };

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
              value={props.inputs.firstname}
              required
            />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={props.inputs.lastname}
              required
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={props.inputs.email}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={props.inputs.password}
              required
            />
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Password"
              onChange={handleChange}
              value={props.inputs.passwordConfirm}
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
                I confirm that I have read and understood the membership and
                privacy policy.
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
