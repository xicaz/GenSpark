import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GameCard(props) {
  const addToLikedGames = (e) => {
    const { target } = e;
    const gameId = target.getAttribute("game_id");
    const userId = props.userId;
    axios
      .post("http://localhost:8080/add-to-liked-games", { userId, gameId })
      .then((res) => {
        console.log("the game was added to this user's liked list");
      })
      .catch((err) => {
        console.log("nah breh");
      });
  };

  const addToDisLikedGames = (e) => {
    const { target } = e;
    const gameId = target.getAttribute("game_id");
    const userId = props.userId;
    axios
      .post("http://localhost:8080/add-to-disliked-games", { userId, gameId })
      .then((res) => {
        console.log("the game was added to this user's disliked list");
      })
      .catch((err) => {
        console.log("nah breh");
      });
  };

  return (
    <>
      <div className="grid ">
        <Link className="card" to={`/games/${props.gameId}`} key={props.gameId}>
          <h4 className="text-center">{props.name}</h4>
        </Link>
        <img
          className="object-cover object-top h-fit sm:h-fit md:h-fit lg:h-48 min-w-full"
          src={props.background_image}
          alt={props.name}
        />
        <div className="flex justify-between text-sm">
          <p>Rating:{props.rating}%</p>
          <p>Released:{props.released}</p>
        </div>
        <div className="flex">
          <button
            onClick={addToLikedGames}
            game_id={props.gameId}
            className=" grow whitespace-nowrap font-medium tracking-wider py-3 px-10 hover:bg-grey bg-black text-white"
          >
            <img
              className="w-7 invert m-auto scale-y-[-1]"
              src="./thumb-down.svg"
              alt="thumb-down"
            />
          </button>
          <button
            onClick={addToDisLikedGames}
            game_id={props.gameId}
            className="grow whitespace-nowrap font-medium tracking-wider py-3 px-10 hover:bg-grey bg-black text-white"
          >
            <img
              className="w-7 invert m-auto scale-x-[-1] fill-red-50"
              src="./thumb-down.svg"
              alt="thumb-up"
            />
          </button>
        </div>
      </div>
    </>
  );
}
