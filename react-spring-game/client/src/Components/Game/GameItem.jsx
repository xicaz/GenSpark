import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, API_KEY, config } from "../../Services/apiConfigGames";

export default function GameItem(props) {
  const [gameTitle, setGameTitle] = useState("");

  useEffect(() => {
    //GET request
    async function fetchData() {
      const res = await axios.get(
        baseURL + `/${props.gameId}` + API_KEY,
        config
      );
      const { name } = res.data;
      setGameTitle(name);
    }
    fetchData();
  }, [props.gameId]);

  const removeFromList = (e) => {
    axios
      .delete(
        `http://localhost:8080/remove-from-${props.listName}-list/${props.userId}/${props.gameId}`
      )
      .then((res) => {
        e.target.parentElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between mb-3 border border-black">
      <Link
        key={props.gameId}
        id={props.gameId}
        className="max-w-4/5"
        to={`/games/${props.gameId}`}
      >
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap py-2 px-3">
          {gameTitle}
        </p>
      </Link>
      <button onClick={removeFromList} className="bg-red text-white px-3">
        ✖
      </button>
    </div>
  );
}
