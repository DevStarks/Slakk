import React from 'react';
import Conversation from '../conversation/conversation';
import ChannelsContainer from '../channels/channels_container';
import { hashToArray } from '../../utils/helpers';
import { hashHistory } from 'react-router';


class MessagePanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = { currentConversation: null };

    this.handleLogout = this.handleLogout.bind(this);
    this.usernameHelper = this.usernameHelper.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
  }

  componentWillMount() {
    this.setState({ currentConversation: hashToArray(this.props.channels)[0] });
  }

  componentDidUpdate() {
    this.props.getMessages(this.state.currentConversation.id);
  }

  handleLogout() {
    this.props.logout();
  }

  usernameHelper() {
    if (this.props.currentUser) {
      return this.props.currentUser.username;
    } else {
      hashHistory.push("/");
      return "";
    }
  }

  changeConversation(conversation) {
    this.setState({ currentConversation: conversation });
  }

  render() {
    return (
      <section className="message-panel">
        <aside className="message-sidebar">
          <h3>signed in as {this.usernameHelper()}</h3>
          <button onClick={this.handleLogout}>Log out</button>
          <ChannelsContainer changeConversation={this.changeConversation}/>
        </aside>
        <section className="conversation">
          <Conversation
            currentConversation={this.state.currentConversation}
          />
        </section>
      </section>
    );
  }
}

export default MessagePanel;
