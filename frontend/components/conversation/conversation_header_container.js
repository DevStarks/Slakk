import { connect } from 'react-redux';
import ConversationHeader from './conversation_header';


const mapStateToProps = ({ directMessages, session, currentConversation }) => ({
  currentUser: session.currentUser,
  conversation: currentConversation,
  directMessages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationHeader);
