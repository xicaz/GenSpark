import React, { Component } from "react";
import Layout from "../Components/Layout/Layout";
import ThreejsScreen from "../Components/Threejs/ThreejsScreen";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="">
        <Layout id={this.props.id} username={this.props.username} >
          <ThreejsScreen />
        </Layout>
      </div>
    );
  }
}

export default Home
