import React from "react";
import DeleteAccountForm from "../Components/Account/DeleteAccountForm";
import Layout from "../Components/Layout/Layout";

export default function DeleteAccount(props) {
    return (
      <Layout id={props.id} username={props.username}>
        <DeleteAccountForm
          id={props.id}
          handleLogout={props.handleLogout}
        />
      </Layout>
    );
}
