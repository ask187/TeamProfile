import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import FrontView from "./components/FrontView";
import Headers from "./components/Headers";
import TeamView from "./components/TeamView";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamId: ""
    };
  }
  changeTeamId = teamId => {
    this.setState({
      teamId
    });
  };
  render() {
    return (
      <div className="ui container">
        <Headers />
        <FrontView />
        <SearchBar changeTeamId={this.changeTeamId} />
        <TeamView teamId={this.state.teamId} />
      </div>
    );
  }
}

export default App;
