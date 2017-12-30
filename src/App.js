import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Gentoo'}
    ]
  }

  changeUsernameHandler = (event) => {
    this.setState({
      users: [
        {username: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.changeUsernameHandler}
          username={this.state.users[0].username}>
        </UserInput> 
        <UserOutput username={this.state.users[0].username}></UserOutput>        
      </div>
    );
  }
}

export default App;
