import { connect } from 'react-redux';
import DirectMessageForm from './direct_message_form';
import { createChannel } from '../../actions/channel_actions';
import { searchUsers } from '../../actions/user_base_actions';

const mapStateToProps = ({ errors, userBase }) => ({
  errors: errors.directMessageErrors,
  searchResults: userBase.searchResults,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createChannel: directMessageData => dispatch(createChannel(directMessageData)),
  searchUsers: searchData => dispatch(searchUsers(searchData)),
  closeDirectMessageForm: ownProps.closeDirectMessageForm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);
