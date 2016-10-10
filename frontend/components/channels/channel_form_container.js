import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChannel: channelData => dispatch(createChannel(channelData)),
  closeNewChannelForm: ownProps.closeNewChannelForm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
