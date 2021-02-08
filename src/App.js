import React, { Component } from "react";
import UserCard from "./components/UserCard";
import SearchMenu from "./components/SearchMenu";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    const getUser = async (query) => {
      const result = await fetch(`https://api.github.com/users/${query}`);
      const obj = await result.json();
      this.setState({ user: obj });
      console.log("User: ", this.state.user);
    };
    getUser();
  }

  render() {
    return (
      <div>
        <SearchMenu getUser={this.getUser} />
        {this.state.user !== null ? (
          <UserCard user={this.state.user} />
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default App;
