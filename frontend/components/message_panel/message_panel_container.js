import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getMessages } from '../../actions/message_actions';

import MessagePanel from './message_panel';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  channels: store.channels
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getMessages: conversationID => dispatch(getMessages(conversationID))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagePanel);
