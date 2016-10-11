import React from 'react';
import MessagePanelContainer from './message_panel/message_panel_container';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="home">
        {this.props.children}
      </main>
    );
  }
}

export default Home;
