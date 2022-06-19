import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Components/Layout/Layout";
import GameItem from "../Components/Game/GameItem";

export default function ListScreen(props) {
  const [likedList, setLikedList] = useState([]);
  const [dislikedList, setDislikedList] = useState([]);

  useEffect(() => {
    //GET request
    axios.get(`http://localhost:8080/liked-games/${props.id}`).then(res => {
      setLikedList(res.data);
    }).catch(err => {
        console.log(err)
    });
    axios.get(`http://localhost:8080/disliked-games/${props.id}`).then(res => {
      setDislikedList(res.data);
    }).catch(err => {
        console.log(err)
      });
  }, [props.id]);


  return (
      <Layout id={props.id} username={props.username}>
        <div className="flex flex-col md:flex-row md:justify-center w-screen gap-10 content-center pt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7 md:min-w-[350px] lg:min-w-[475px]">
          <h3 className="text-xl mb-3">Liked Games</h3>
          {likedList.map((game, key) => <GameItem key={key} gameId={game.gameId} listName={"liked"} userId={props.id} />)}
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7 md:min-w-[350px] lg:min-w-[475px]">
          <h3 className="text-xl mb-3">Disliked Games</h3>
          {dislikedList.map((game, key) => <GameItem key={key} gameId={game.gameId} listName={"disliked"} userId={props.id}/>)}
        </div>
        </div>
      </Layout>
  );
}
