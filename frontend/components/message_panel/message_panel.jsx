import React from 'react';
import Conversation from '../conversation/conversation';
import ChannelsContainer from '../channels/channels_container';
import DirectMessagesContainer from '../direct_messages/direct_messages_container';
import { hashToArray } from '../../utils/helpers';
import { hashHistory } from 'react-router';


class MessagePanel extends React.Component {
  constructor(props) {
    super(props);

    this.usernameHelper = this.usernameHelper.bind(this);
    this.menuOn = this.menuOn.bind(this);
  }

  componentWillMount() {
    const firstConversation = hashToArray(this.props.channels)[0];
    this.props.setCurrentConverstion(firstConversation);
    this.props.getMessages(firstConversation.id);
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) { hashHistory.push("/"); }
  }


  usernameHelper() {
    return this.props.currentUser ? this.props.currentUser.username : "";
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
            <li onClick={this.props.logout}>Log out</li>
          </ul>

          <ChannelsContainer />

          <DirectMessagesContainer />
        </aside>

        <section className="conversation">
          <Conversation />
        </section>
      </section>
    );
  }
}

export default MessagePanel;
