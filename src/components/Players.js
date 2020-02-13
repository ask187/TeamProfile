import React, { Component } from "react";
import dota_api from "../api/dotaapi";
import PlayerCard from "./PlayerCard";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerInfo: {}
    };
  }

  renderPlayers = () => {
    let content = <div></div>;

    if (this.state.players.length <= 0) {
      dota_api.get(`teams/${this.props.teamId}/players`).then(d => {
        this.setState({
          players: d.data.filter(d => d.is_current_team_member)
        });
      });

      content = this.state.players.map((player, ind) => (
        <div key={ind}>
          {console.log(player)}
          <PlayerCard
            players={this.state.playerInfo}
            playerId={player.account_id}
            index={ind}
          />
        </div>
      ));
    } else {
      content = this.state.players.map((player, ind) => (
        <PlayerCard
          players={this.state.playerInfo}
          playerId={player.account_id}
          index={ind}
        />
      ));
    }
    return <div className="ui grid">{content}</div>;
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
  componentWillMount() {
    dota_api.get(`proPlayers`).then(d =>
      this.setState({
        playerInfo: d.data
      })
    );
  }
}
