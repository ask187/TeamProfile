import React from "react";
import SearchBar from "./components/SearchBar";
import FrontView from "./components/FrontView";
import Headers from "./components/Headers";
function App() {
  return (
    <div className="ui container">
      <Headers />
      <FrontView />
      <SearchBar />
    </div>
  );
}

export default App;
