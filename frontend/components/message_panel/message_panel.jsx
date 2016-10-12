import React from 'react';
import Conversation from '../conversation/conversation';
import ChannelsContainer from '../channels/channels_container';
import DirectMessagesContainer from '../direct_messages/direct_messages_container';
import { hashToArray } from '../../utils/helpers';
import { hashHistory } from 'react-router';


class MessagePanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = { currentConversation: null };

    this.handleLogout = this.handleLogout.bind(this);
    this.usernameHelper = this.usernameHelper.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
    this.menuOn = this.menuOn.bind(this);
    this.redirectUnlessLoggedIn = this.redirectUnlessLoggedIn.bind(this);
  }

  componentWillMount() {
    this.setState({ currentConversation: hashToArray(this.props.channels)[0] });
  }

  componentWillReceiveProps(nextProps) {
    this.redirectUnlessLoggedIn(nextProps);
  }

  componentDidUpdate() {
    this.props.getMessages(this.state.currentConversation.id);
  }

  handleLogout() {
    this.props.logout();
  }

  redirectUnlessLoggedIn(props){
    if (!props.currentUser) {
      hashHistory.push("/");
    }
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

  menuOn() {
    const sidebarMenu = this.refs.sidebarMenu;
    sidebarMenu.className = "sidebar-menu";

    $('sidebar-menu').on('click', e => e.stopPropagation());
    $('body').on('click', () => {
      sidebarMenu.className = "sidebar-menu hidden";
    });
  }

  render() {
    return (
      <section className="message-panel">
        <aside className="message-sidebar">

          <section className="sidebar-menu-button" onClick={this.menuOn}>
            <h1>{this.usernameHelper()}<span>&or;</span></h1>
          </section>

          <ul
            className="sidebar-menu hidden"
            ref="sidebarMenu"
          >
            <li onClick={this.handleLogout}>Log out</li>
          </ul>

          <ChannelsContainer
            changeConversation={this.changeConversation}
            currentConversation={this.state.currentConversation}
          />

          <DirectMessagesContainer
            changeConversation={this.changeConversation}
            currentConversation={this.state.currentConversation}
          />
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
