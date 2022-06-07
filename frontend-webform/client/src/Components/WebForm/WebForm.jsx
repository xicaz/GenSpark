import React from "react";
import "../WebForm/WebForm.css";

export default function WebForm() {
  return (
    <>
      <div className="container">
        <div>
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
            <input type="text" id="email" name="email" placeholder="Email" />
            {/* <input
              type="checkbox"
              id="emailchain"
              name="emailchain"
              value="emailchain"
            /> */}
            <div className="policy">
              <input type="checkbox" id="policy" name="policy" value="policy" />{" "}
              <label for="policy">
                I confirm that i have read and understood the membership policy
                and privacy policy.
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
