import React from 'react';
import { hashToArray } from '../../utils/helpers';

class DirectMessages extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.classNameHelper = this.classNameHelper.bind(this);
  }

  componentWillMount() {
    this.props.getDirectMessageNames(Object.keys(this.props.directMessages));
  }

  classNameHelper(dMessage) {
    if (dMessage.id === this.props.currentConversation.id) {
      return "selected";
    } else {
      return "";
    }
  }

  handleClick(dMessage) {
    return () => {
      this.props.changeConversation(dMessage);
    };
  }

  allDirectMessages() {
    return hashToArray(this.props.directMessages).map( dMessage => {
      return (
        <li
          className={this.classNameHelper(dMessage)}
          key={dMessage.id}
          onClick={this.handleClick(dMessage)}
        >
          <span>#</span> {dMessage.name}
        </li>
      );
    });
  }

  render() {
    return (
      <section className="channels">
        <h2>DIRECT MESSAGES
          <span>
            &nbsp;()
          </span>
        </h2>

        <img src='assets/new.png' />

        <ul>
          {this.allDirectMessages()}
        </ul>
      </section>
    );
  }
}

export default DirectMessages;
