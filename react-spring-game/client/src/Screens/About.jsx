import React from "react";
import Layout from "../Components/Layout/Layout";

export default function About(props) {
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <div className="grid w-screen justify-items-center pt-10">
          <div className="w-full max-w-lg">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
              <div className="grid w-full justify-items-center h-10">
                <label className="text-xl">About</label>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
