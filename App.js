import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AmyChatWindow from './AmyChatWindow.js';
import JohnChatWindow from './JohnChatWindow.js';
import JohnChatInput from './JohnChatInput.js';
import AmyChatInput from './AmyChatInput.js';

class App extends Component {
  state = {
    users: [
      { username: 'Amy' },
      { username: 'John' },
    ],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }
  addMessage = (username, text) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, { username, text }]
    }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
        <div className="chat-window">
        <AmyChatWindow currentChat={this.state.users} currentMessages={this.state.messages} />
          <AmyChatInput currentChat={this.state.users} currentMessages={this.state.messages} addMessage={(username, text) => this.addMessage(username, text)} />
</div>
<div className="chat-window">
        <JohnChatWindow currentChat={this.state.users} currentMessages={this.state.messages} />
          <JohnChatInput currentChat={this.state.users} currentMessages={this.state.messages} addMessage={(username, text) => this.addMessage(username, text)} />
</div>
        
        </div>
      </div>
    );
  }
}

export default App;
