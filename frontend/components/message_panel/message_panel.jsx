import React from 'react';
import ConversationContainer from '../conversation/conversation_container';
import ChannelsContainer from '../channels/channels_container';
import { hashHistory } from 'react-router';


class MessagePanel extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.usernameHelper = this.usernameHelper.bind(this);
  }

  // componentWillMount() {
  //   this.redirectUnlessLoggedIn();
  // }
  //
  // redirectUnlessLoggedIn(){
  //   if (!this.props.currentUser) {
  //     hashHistory.push("/");
  //   }
  // }

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

  render() {
    return (
      <section className="message-panel">
        <aside className="message-sidebar">
          <h3>signed in as {this.usernameHelper()}</h3>
          <button onClick={this.handleLogout}>Log out</button>
          <ChannelsContainer />
        </aside>
        <section className="conversation">
          <ConversationContainer />
        </section>
      </section>
    );
  }
}

export default MessagePanel;
