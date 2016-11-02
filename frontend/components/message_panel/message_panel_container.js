import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getMessages } from '../../actions/message_actions';
import { setCurrentConverstion } from '../../actions/current_conversation_actions';

import MessagePanel from './message_panel';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  channels: store.channels.userChannels,
  currentConversation: store.currentConversation
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getMessages: conversationID => dispatch(getMessages(conversationID)),
  setCurrentConverstion: conversation => dispatch(setCurrentConverstion(conversation))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagePanel);
