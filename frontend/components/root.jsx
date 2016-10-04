import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';

const Root = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default Root;
