import { connect } from 'react-redux';
import ChannelBrowse from './channel_browse';
import { connectToChannel, searchChannels } from '../../actions/channel_actions';

const mapStateToProps = ({ errors, channels }) => ({
  errors: errors.channelErrors,
  searchResults: channels.searchResults,
  channelCount: channels.channelCount,
  userChannels: channels.userChannels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  connectToChannel: channelID => dispatch(connectToChannel(channelID)),
  searchChannels: searchData => dispatch(searchChannels(searchData)),
  closeChannelBrowse: ownProps.closeChannelBrowse,
  changeConversation: ownProps.changeConversation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelBrowse);
