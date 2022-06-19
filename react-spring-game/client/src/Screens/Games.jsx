import React from "react";
import GameContainer from "../Components/Game/GamesContainer";
import GameSearch from "../Components/Game/GameSearch";
import Layout from "../Components/Layout/Layout";

export default function Games(props) {

  const handleSearch = () => {

  }
  
  const handleIncomingResults = () => {
    
  }
  
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <GameSearch handleSearch={handleSearch}/>
        <GameContainer id={props.id} handleIncomingResults={handleIncomingResults} />
      </Layout>
    </div>
  );
}
