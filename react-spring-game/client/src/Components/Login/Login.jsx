import axios from "axios";
import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate()
  useEffect(() => {
    if (props.id) {
      navigate("/")
    }
  }, [navigate, props.id])
  const handleSignIn = (e) => {

    const { value: email } = document.getElementById("email")
    const { value: password } = document.getElementById("password")

    axios.post("http://localhost:8080/login", { email, password }).then(res => {
      const { data } = res
      if (data.msg) {
        document.getElementById("msg").innerText = data.msg
      } else {
        document.getElementById("msg").innerText = "You're in!"
        localStorage.setItem("userId", data.id)
        localStorage.setItem("username", data.username)
        props.handleLogin(data.id, data.username)
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
      
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
                <h3 className="text-xl">Welcome</h3>
              </div>
              <div className="mb-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  autoComplete="true"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  autoComplete="true"
                />
                <p id="msg" className=" text-xs italic text-center"></p>
              </div>
              <div className="flex items-center justify-between">
                <Link to="/signup">
                  <div
                    className="inline-block align-baseline font-bold text-sm hover:yellow"
                    href="/"
                  >
                    New Account?
                  </div>
                </Link>
                <a
                  className="inline-block align-baseline font-bold text-sm hover:yellow"
                  href="/"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex flex-col h-12 mt-3">
                <button
                  className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded "
                  type="button"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
