
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

export default connect(
  mapStateToProps,
  { getMessages, deleteMessage }
)(Messages);
