import React from "react";
import "../WebForm/WebForm.css";
import Link from "react";

export default function WebForm() {
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
          <form action="/action_page.php">
            <label for="Registration">Register</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input type="text" id="email" name="email" placeholder="Email" />
            {/* <input
              type="checkbox"
              id="emailchain"
              name="emailchain"
              value="emailchain"
            /> */}
            <div className="emailcheck-container">
              <input
                type="checkbox"
                id="emailcheck"
                name="emailcheck"
                value="emailcheck"
              />
              <label for="emailcheck">
                I would like to be the first to receive updates about Derivative
                Studios exclusive new product drops and other inspirational
                content.
              </label>
            </div>
            <div className="policy-container">
              <input type="checkbox" id="policy" name="policy" value="policy" />{" "}
              <label for="policy">
                I confirm that I have read and understood the membership policy
                and privacy policy.
              </label>
            </div>

            <input type="submit" value="Submit" />
            <div>
              <label for="newpassword">
                new password
                {/* ADD NEW PASSWORD COMPONENT */}
              </label>
              <br />
              <label for="login"> login{/* ADD LOGIN COMPONENT */}</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
