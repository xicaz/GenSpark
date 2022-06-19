import { Routes, Route } from "react-router-dom"
import React, { Component } from "react"
import Home from "./Screens/Home"
// import About from "./Screens/About";
import Game from "./Screens/Game"
import Games from "./Screens/Games"
import Login from "./Screens/LoginScreen"
import Signup from "./Screens/Signup"
import Account from "./Screens/Account"
import EditUsername from "./Screens/EditUsername"
import EditPassword from "./Screens/EditPassword"
import DeleteAccount from "./Screens/DeleteAccount"
import ListScreen from "./Screens/ListScreen"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      username: null,
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleEditUsername = this.handleEditUsername.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.setState({
      id: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
    })
  }

  handleLogin = (id, username) => {
    this.setState({ id, username })
  }

  handleEditUsername = (username) => {
    this.setState({ username })
    localStorage.setItem("username", username)
  }

  handleLogout = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
    this.setState({ id: null, username: null })
    window.location.href = "/"
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home id={this.state.id} username={this.state.username} />}
          />
          <Route
            path="/lists"
            element={
              <ListScreen id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/games"
            element={
              <Games id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/games/:id"
            element={<Game id={this.state.id} username={this.state.username} />}
          />
          <Route
            path="/login"
            element={
              <Login
                handleLogin={this.handleLogin}
                id={this.state.id}
                username={this.state.username}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                id={this.state.id}
                username={this.state.username}
                handleLogout={this.handleLogout}
              />
            }
          />
          <Route
            path="/account/edit-username"
            element={
              <EditUsername
                id={this.state.id}
                username={this.state.username}
                handleEditUsername={this.handleEditUsername}
              />
            }
          />
          <Route
            path="/account/edit-password"
            element={
              <EditPassword id={this.state.id} username={this.state.username} />
            }
          />
          <Route
            path="/account/delete-account"
            element={
              <DeleteAccount
                id={this.state.id}
                username={this.state.username}
                handleLogout={this.handleLoginhandleLogout}
              />
            }
          />
        </Routes>
      </div>
    )
  }
}
