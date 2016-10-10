import { connect } from 'react-redux';
import { deleteMessage } from "../../actions/message_actions";
import Message from './message';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteMessage: messageID => dispatch(deleteMessage(messageID)),
  info: ownProps.info
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
