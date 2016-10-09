import { connect } from 'react-redux';
import Channels from './channels';
import getMessages from '../../actions/message_actions';

const mapStateToProps = ({ channel: { channels }}) => ({
  channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMessages: channelID => getMessages(channelID)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
