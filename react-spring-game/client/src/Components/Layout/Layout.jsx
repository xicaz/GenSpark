import React, {Component} from "react";
import NavBar from "./NavBar";

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="w-screen h-screen z-10">
        <NavBar
          id={this.props.id}
          username={this.props.username}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Layout