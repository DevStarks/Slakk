
import { connect } from 'react-redux';
import { getMessages, deleteMessage } from "../../actions/message_actions";
import Messages from './messages';

const mapStateToProps = (store) => ({
  messages: store.messages,
  errors: store.errors.messageErrors,
  channels: store.channels
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMessages: conversationID => dispatch(getMessages(conversationID)),
    deleteMessage: () => dispatch(deleteMessage()),
    currentConversation: ownProps.currentConversation
  };
};

export default connect(
  mapStateToProps,
  { getMessages, deleteMessage }
)(Messages);
