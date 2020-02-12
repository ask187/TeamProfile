import React, { Component } from "react";
import dota_api from "../api/dotaapi";
import Players from "./Players";
export default class TeamView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: {}
    };
  }

  componentWillReceiveProps(props) {
    dota_api.get(`/teams/${props.teamId}`).then(d => {
      this.setState({
        teamData: d.data
      });
    });
  }
  renderProfileCard() {
    return (
      <div className="ui card">
        <a className="image">
          <img src={this.state.teamData.logo_url} />
        </a>
        <div className="content">
          <a className="header">{this.state.teamData.name}</a>
          <div className="meta">
            <span>Wins:{this.state.teamData.wins}</span>
          </div>
          <div className="meta">
            <span>Losses:{this.state.teamData.losses}</span>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.state.teamData.name === undefined ? null : (
      <div className="ui grid">
        <div className="eight wide column">{this.renderProfileCard()}</div>
        <div className="eight wide column">
          <Players teamId={this.props.teamId} />
        </div>
      </div>
    );
  }
}
