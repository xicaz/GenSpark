import React from "react";

export default function GameSearch() {

  const handleSearch = () => {
    console.log("searching for new games")
  }


  return (
    <>
      <div className="grid w-screen justify-items-center pt-10">
        <div className="w-full max-w-lg">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7 max-w-[700px] m-auto">
            {/* <div className="grid w-full justify-items-center h-10">
              <label className="text-xl">Search</label>
            </div> */}
            <div className="flex items-center justify-between h-10">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search-value"
                type="text"
                placeholder="..."
                // autoComplete="true"
              />
              <div className="w-32">
                <button
                  className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded  "
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
