import React, { Component } from "react";
import UserCard from "./components/UserCard";
import SearchMenu from "./components/SearchMenu";
import ContribGraph from "./components/ContribGraph";
import Followers from "./components/Followers";
class App extends Component {
  state = { user: {}, followers: [] };

  getUser = async (query) => {
    const result = await fetch(`https://api.github.com/users/${query}`);
    const obj = await result.json();
    this.setState({ user: obj });
    console.log("User: ", this.state.user);
  };

  getFollowers = async (query) => {
    const result = await fetch(
      `https://api.github.com/users/${query}/followers`
    );
    const obj = await result.json();
    this.setState({ followers: obj });
    console.log("followers: ", this.state.followers);
  };

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  render() {
    return (
      <div className="app">
        <SearchMenu getUser={this.getUser} getFollowers={this.getFollowers} />
        {this.state.user !== null ? (
          <UserCard user={this.state.user} />
        ) : (
          "Loading..."
        )}
        <ContribGraph />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
