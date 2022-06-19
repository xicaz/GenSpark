import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export default function Account(props) {
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <div className="grid w-screen justify-items-center pt-10">
          <div className="w-full max-w-[750px]">
            <div className="bg-white shadow-md rounded p-4 mb-7">
              <div className="grid w-full justify-items-center h-10">
                <h3 className="text-xl">Account</h3>
              </div>
            </div>
            <div className="grid grid-cols-4 place-items-center">
              <Link className="hover:underline hover:underline-offset-8 hover:font-bold" to="/account/edit-username">Edit Username</Link>
              <Link className="hover:underline hover:underline-offset-8 hover:font-bold" to="/account/edit-password">Edit Password</Link>
              <button onClick={props.handleLogout} className="hover:underline hover:underline-offset-8 hover:font-bold">Log Out</button>
              <Link className="hover:underline hover:underline-offset-8 hover:font-bold" to="/account/delete-account">Delete Account</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
