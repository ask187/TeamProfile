import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import FrontView from "./components/FrontView";
import Headers from "./components/Headers";
import TeamView from "./components/TeamView";
import Footer from "./components/Footer";
import "./app.css";
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
    // console.log(this.state);
    return (
      <div className="ui container">
        {/* <Headers /> */}
        <FrontView />
        <SearchBar changeTeamId={this.changeTeamId} />
        <TeamView teamId={this.state.teamId} />
        <Footer />
      </div>
    );
  }
}

export default App;
