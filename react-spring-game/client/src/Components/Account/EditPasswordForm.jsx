import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
    
export default function EditPasswordForm(props) {
    let navigate = useNavigate()
    const handleEditPassword = () => {
        const { value: password } = document.getElementById("current_password")
        const {value: newPassword} = document.getElementById("new_password")
        axios.put(`http://localhost:8080/edit-password/${props.id}`, { password, newPassword }).then(res => {
        const { data } = res
            document.getElementById("msg").innerText = data
      }).catch(err => {
        console.log(err)
      }) 
    }
    return (
        <>
          <div className="grid w-screen m-auto max-w-[500px] justify-items-center pt-10">
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
                <div className="flex flex-col items-center justify-between">
                  <h3 className="text-xl mb-3">Edit Password</h3>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="current_password"
                  >
                    Current Password
                  </label>
                  <input
                    className="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="current_password"
                    type="password"
                    placeholder="******************"
                    autoComplete="true"
                    />
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="new_password"
                  >
                    New Password
                  </label>
                  <input
                    className="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="new_password"
                    type="password"
                    placeholder="******************"
                    autoComplete="true"
                    />
                            
                <p id="msg" className=" text-xs italic text-center"></p>
                </div>
                <div className="flex flex-col h-24 mt-3">
                  <button
                    className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded "
                    type="button"
                    onClick={handleEditPassword}
                  >
                    Change Password
                  </button>
                  <button
                    className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold mt-3 py-2 px-4 rounded "
                    type="button"
                    onClick={()=> {navigate("/account")}}
                  >
                    Back to Account
                            </button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}