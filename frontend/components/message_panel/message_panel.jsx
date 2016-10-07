import React from 'react';
import ConversationContainer from '../conversation/conversation_container';

class MessagePanel extends React.Component {

  render() {
    return (
      <section className="message-panel">
        <aside className="message-sidebar">
          <h3>sidebar</h3>
        </aside>
        <section className="conversation">
          <ConversationContainer />
        </section>
      </section>
    );
  }
}

export default MessagePanel;
