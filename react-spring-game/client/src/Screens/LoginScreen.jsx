import React, {useEffect} from "react";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";

export default function LoginScreen(props) {

  useEffect(() => {
    

  }, [] )

  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <Login
          id={props.id}
          username={props.username}
          handleLogin={props.handleLogin} />
      </Layout>
    </div>
  );
}
