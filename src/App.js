import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue"
        }}
      >
        <button onClick={() => alert("hello")}>alert hello</button>
      </div>
    );
  }
}

export default App;
