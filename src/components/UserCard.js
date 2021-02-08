import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}
export default UserCard;
