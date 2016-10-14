import { connect } from 'react-redux';
import ConversationHeader from './conversation_header';


const mapStateToProps = ({ directMessages }) => ({
  directMessages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  conversation: ownProps.currentConversation
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationHeader);
