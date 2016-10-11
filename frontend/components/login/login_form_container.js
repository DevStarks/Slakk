import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  errors: store.errors.sessionErrors
});

export default connect(
  mapStateToProps,
  { login, clearSessionErrors }
)(LoginForm);
