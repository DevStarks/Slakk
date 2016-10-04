import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import login from '../../actions/session_actions';

const mapStateToProps = ({ session: { currentUser, errors } }) => ({
  currentUser,
  errors
});

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    login: user => dispatch(login(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
