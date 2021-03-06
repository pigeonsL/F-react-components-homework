import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  findTagsOfInput = (question) => {
    const Tags = answersData.map((answer) => answer.tags);
    const questionTag = Tags.find((tag) => question.includes(tag));
    return questionTag;
  };

  handleChange = (e) => {
    const question = e.target.value;
    let tag = this.findTagsOfInput(question);
    if (tag === undefined) {
      tag = '';
    }
    const conversation = {
      text: question,
      tag: tag.toString(),
    };
    this.setState({
      question: conversation,
    });
  };

  handleClick = () => {
    // clear input when click button
    document.getElementsByClassName('input')[0].value = '';
    const { question } = this.state;
    if (question === undefined) {
      return;
    }
    let conversationContent;
    if (question.tag === '') {
      conversationContent = this.state.messages.concat(question);
    } else {
      const answer = answersData.find((data) => data.tags.includes(question.tag));
      conversationContent = this.state.messages.concat(question, answer);
    }
    this.setState(() => {
      return {
        messages: conversationContent,
        question: undefined,
      };
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput handleChange={this.handleChange} handleClick={this.handleClick} />
      </main>
    );
  }
}

export default Chat;
