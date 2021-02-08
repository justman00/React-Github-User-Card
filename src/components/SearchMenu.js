import React, { Component } from "react";

class SearchMenu extends Component {
  state = { name: "" };

  handleClick = (evt) => {
    evt.preventDefault();
    console.log("input value: ", this.state.name);
    this.props.getUser(this.state.name);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button type="button" onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}
export default SearchMenu;
