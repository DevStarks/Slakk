import React from 'react';
import MessagePanelContainer from './message_panel/message_panel_container';

const Home = ({ children }) => {
  return (
    <main className="home">
      <MessagePanelContainer />
    </main>
  );
};

export default Home;
