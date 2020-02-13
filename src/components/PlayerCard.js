import React, { Component } from "react";
import dota_api from "../api/dotaapi";

export default class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: {}
    };
  }
  render() {
    return (
      <div key={this.props.index} className="five wide column">
        <div className="ui card">
          <a className="image">
            <img
              src={this.state.playerInfo.avatarfull}
              alt={"this.state.playerInfo.account_id"}
            />
          </a>
          <div className="content">
            <a className="header">{this.state.playerInfo.name}</a>
          </div>
        </div>
      </div>
    );
  }
  componentWillReceiveProps(props) {
    let playerInfo = props.players.filter(d => d.account_id === props.playerId);
    this.setState({
      playerInfo: playerInfo[0]
    });
  }
}
