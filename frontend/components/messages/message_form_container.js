import { connect } from 'react-redux';
import { createMessage } from "../../actions/message_actions";
import MessageForm from './message_form';

const mapStateToProps = ({ message: { messages }, session: { currentUser }}) => ({
  currentUser,
  messages
});

export default connect(
  mapStateToProps,
  { createMessage }
)(MessageForm);
