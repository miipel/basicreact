import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Mint'},
      {username: 'Gentoo'},
      {username: 'CentOS'}   
    ]
  }

  changeUsernameHandler = (event) => {
    this.setState({
      users: [
        {username: event.target.value},
        {username: 'Gentoo was changed'},
        {username: 'CentOS was changed'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler}></UserInput> 
        <UserOutput username={this.state.users[0].username}></UserOutput>
        <UserOutput username={this.state.users[1].username}></UserOutput>
        <UserOutput username={this.state.users[2].username}></UserOutput>
        
      </div>
    );
  }
}

export default App;
