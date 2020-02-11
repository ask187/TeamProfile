import React, { Component } from "react";

export default class TeamView extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.teamId}</h1>
      </div>
    );
  }
}
