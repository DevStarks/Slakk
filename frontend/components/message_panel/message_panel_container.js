import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import MessagePanel from './message_panel';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  { logout }
)(MessagePanel);
