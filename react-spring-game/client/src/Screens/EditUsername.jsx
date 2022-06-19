import React from "react";
import EditUsernameForm from "../Components/Account/EditUsernameForm";
import Layout from "../Components/Layout/Layout";

export default function EditUsername(props) {
    return (
      <Layout id={props.id} username={props.username}>
        <EditUsernameForm
          id={props.id}
          handleEditUsername={props.handleEditUsername} />
      </Layout>
    );
}
