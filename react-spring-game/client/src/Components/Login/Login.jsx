import React from "react";

export default function Login() {
  return (
    <>
      <div className="grid w-screen justify-items-center pt-10">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
            <div className="flex flex-col items-center justify-between">
              <label className="  text-xl">Welcome</label>
            </div>

            <div class="mb-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class=" text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <a
                class="inline-block align-baseline font-bold text-sm hover:yellow"
                href="/"
              >
                New Account?
              </a>
              <a
                class="inline-block align-baseline font-bold text-sm hover:yellow"
                href="/"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col h-12 mt-3">
              <button
                class="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded "
                type="button"
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
