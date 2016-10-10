
import { connect } from 'react-redux';
import { getMessages, deleteMessage } from "../../actions/message_actions";
import Messages from './messages';

const mapStateToProps = ({
    message: { messages },
    session: { errors },
    channel: { channels }
  }) => ({
  messages,
  errors,
  channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMessages: () => dispatch(getMessages(ownProps.currentConversation.id)),
  deleteMessage: () => dispatch(deleteMessage()),
  currentConversation: ownProps.currentConversation
});

export default connect(
  mapStateToProps,
  { getMessages, deleteMessage }
)(Messages);
