import { connect } from 'react-redux';
import { createMessage, editMessage } from "../../actions/message_actions";
import MessageForm from './message_form';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.messageErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createMessage: (message, conversationID) => dispatch(createMessage(message, conversationID)),
  editMessage: (message, cb) => dispatch(editMessage(message, cb)),
  currentConversation: ownProps.currentConversation,
  updateScroll: ownProps.updateScroll,
  type: ownProps.type,
  messageInfo: ownProps.messageInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
