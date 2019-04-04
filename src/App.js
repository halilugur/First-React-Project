import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : "Halil UĞUR",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id : 2,
        name : "Lokman UĞUR",
        salary : "10000",
        department : "Yönetici"
      },
      {
        id : 3,
        name : "Sait UĞUR",
        salary : "7000",
        department : "Tekniker"
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title="User App 2" />
        <hr />
        <Users users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
