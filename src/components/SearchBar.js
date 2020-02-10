import React, { Component } from "react";
import dota_api from "../api/dotaapi";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      teams: {}
    };
  }
  componentWillMount() {
    dota_api.get(`teams`).then(({ data }) => {
      let teamsObj = data.map(team => {
        let obj = {};
        obj["team_name"] = team.name;
        obj["team_id"] = team.team_id;
        obj["team_logo"] = team.logo_url;

        return obj;
      });
      this.setState({
        teams: teamsObj
      });
    });
  }
  submitform = props => {
    props.preventDefault();
    let teams = [...this.state.teams];
    let foundObj = teams.filter(
      d => d.team_name.toUpperCase() == this.state.searchKey.toUpperCase()
    );
    let foundId = foundObj
      ? foundObj[0]
        ? foundObj[0].team_id
          ? foundObj[0].team_id
          : undefined
        : undefined
      : undefined;
  };
  inputChange = e => {
    this.setState({
      searchKey: e.target.value
    });
  };
  render() {
    return (
      <div className="ui center aligned basic segment">
        <form onSubmit={this.submitform} className="ui  form">
          <div className="field">
            <input
              type="text"
              onChange={this.inputChange}
              placeholder="Search Team Names"
            />
            <button
              //   onClick={() => this.submitform()}
              className="ui  huge green button"
            >
              Find
            </button>
          </div>
        </form>
      </div>
    );
  }
}
