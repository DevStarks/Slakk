import { connect } from 'react-redux';
import { createMessage, editMessage } from "../../actions/message_actions";
import MessageForm from './message_form';

const mapStateToProps = ({ message: { messages }, session: { currentUser }}) => ({
  currentUser,
  messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createMessage: message => dispatch(createMessage(message)),
  editMessage: (message, cb) => dispatch(editMessage(message, cb)),
  updateScroll: ownProps.updateScroll,
  type: ownProps.type,
  messageInfo: ownProps.messageInfo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
