import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session: { currentUser, errors } }) => ({
  currentUser,
  errors
});

export default connect(
  mapStateToProps,
  { login, clearSessionErrors }
)(LoginForm);
