import { connect } from 'react-redux';
import Channels from './channels';

const mapStateToProps = ({ channel: { channels }}) => ({
  channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeConversation: ownProps.changeConversation,
  currentConversation: ownProps.currentConversation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
