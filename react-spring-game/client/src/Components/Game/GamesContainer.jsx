import React, {Component } from "react";
import GameCard from "./GameCard";
import { baseURL, API_KEY, config } from "../../Services/apiConfigGames";
import axios from "axios";

export default class GamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    axios.get(baseURL + API_KEY, config).then(res => {
        this.setState({games: res.data.results})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="m-auto grid gap-10 max-w-[1250px] md:w-30 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:px-10 lg:grid-cols-3 pb-12">
        {this.state.games.map((game) => {
          return (
            <GameCard
              gameId={game.id}
              userId={this.props.id}
              name={game.name}
              background_image={game.background_image}
              rating={game.metacritic}
              released={game.released}
              key={game.id}
            />
          );
        })}
      </div>
    );
  }
}