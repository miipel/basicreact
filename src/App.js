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
    const style = {
      font: 'inherit',
      textShadow: '2px 2px 5px red'
    };

    return (
      <div className="App">
        <UserInput 
          changed={this.changeUsernameHandler}
          username={this.state.users[0].username}>
        </UserInput> 
        <UserOutput 
          style={style} 
          username={this.state.users[0].username}>
        </UserOutput>        
      </div>
    );
  }
}

export default App;
