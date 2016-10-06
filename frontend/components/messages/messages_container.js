
import { connect } from 'react-redux';
import { getMessages } from "../../actions/message_actions";
import Messages from './messages';

const mapStateToProps = ({ message: { messages }, session: { errors } }) => ({
  messages,
  errors
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
