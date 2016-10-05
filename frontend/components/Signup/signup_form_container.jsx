import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { login, signup } from '../../actions/session_actions';
import { checkUsername } from '../../actions/session_actions';

const mapStateToProps = ({ session: { errors } }) => ({
  errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    checkUsername: username => dispatch(checkUsername(username)),
    signup: user => dispatch(signup(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
