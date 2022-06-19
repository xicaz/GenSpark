import React, { Component } from "react";
import axios from "axios";
import { baseURL, API_KEY, config } from "../../Services/apiConfigGames";
// import { Link } from "react-router-dom";

export default class GameDetail extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      backgroundImage: "",
      gameName: "",
      gameDescription: ""
    }
  }

  componentDidMount() {
    axios.get(baseURL + `/${this.props.id}` + API_KEY, config).then(res => {
        const{data} = res
      this.setState({ backgroundImage: data.background_image, gameName: data.name })
      document.getElementById("description").innerHTML = data.description
    }).catch(err => {
      console.log(err)
    })
  }
  
  render() {
    
    return (
      <>
        <div className="">
          <img
            className="game-image"
            src={this.state.backgroundImage}
            alt={this.state.gameName}
          />
          <div className="game-name">{this.state.gameName}</div>
          <div id="description" className="game-description"></div>
        </div>
      </>
    );
  }
}
