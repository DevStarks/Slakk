import { connect } from 'react-redux';

import Conversation from './conversation';

const mapStateToProps = ({ message: { messages }, session: { currentUser }}) => ({
  currentUser,
  messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createMessage: message => dispatch(createMessage(message)),
  editMessage: (message, cb) => dispatch(editMessage(message, cb)),
  type: ownProps.type,
  messageInfo: ownProps.messageInfo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);
