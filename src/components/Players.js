import React, { Component } from "react";
import dota_api from "../api/dotaapi";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  renderPlayers = () => {
    console.log(this.state.players);
    let content = <div></div>;
    if (this.state.players.length <= 0) {
      dota_api.get(`teams/${this.props.teamId}/players`).then(d => {
        this.setState({
          players: d.data.filter(d => d.is_current_team_member)
        });
      });
      content = this.state.players.map((player, ind) => (
        <div key={ind}>{player.name}</div>
      ));
    } else {
      content = this.state.players.map((player, ind) => (
        <div key={ind} className="five wide column">
          <div className="ui card">
            <a className="image">
              <img alt={player.name} />
            </a>
            <div className="content">
              <a className="header">{player.name}</a>
            </div>
          </div>
        </div>
      ));
    }
    return content;
  };
  componentWillReceiveProps = props => {
    dota_api.get(`teams/${props.teamId}/players`).then(d =>
      this.setState({
        teamId: this.props.teamId,
        players: d.data.filter(d => d.is_current_team_member)
      })
    );
  };

  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}
