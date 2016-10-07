import React from 'react';
import MessagePanelContainer from './message_panel/message_panel_container';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="home">
        <MessagePanelContainer />
      </main>
    );
  }
}

export default Home;
