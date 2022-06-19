import React from "react";
import EditPasswordForm from "../Components/Account/EditPasswordForm";
import Layout from "../Components/Layout/Layout";

export default function EditPassword(props) {
    return (
      <Layout id={props.id} username={props.username}>
        <EditPasswordForm id={props.id}/>
      </Layout>
    );
}
