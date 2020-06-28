import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  render() {
    return (
      <footer className="ChatInput">
        <input className="input" type="text" onChange={this.props.handleChange} />
        <button type="button" onClick={this.props.handleClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
