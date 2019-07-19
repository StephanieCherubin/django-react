import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

class App extends Component {
  render(){
    return(
      <div>
        <DataProvider endpoint="api/lead/" 
                render={data => <Table data={data} />} />
      </div>
    )
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

export default App;