import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from './nav/Navbar.jsx';
import EnvContainer from './env/EnvContainer.jsx';
import ChatContainer from './chat/ChatContainer.jsx';

class RoomApp extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <main>
          <EnvContainer/>
          <ChatContainer/>
        </main>
      </div>
    )
  }
}

export default RoomApp;
