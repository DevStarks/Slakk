import React from 'react';
import { hashToArray } from '../../utils/helpers';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const channelArr = hashToArray(this.props.channels);
    return (
      <section className="channels">
        <h2>CHANNELS ({channelArr.length})</h2>
        <ul>
          {this.allChannels(channelArr)}
        </ul>
      </section>
    );
  }

  classNameHelper(channel) {
    if (channel === this.props.currentConversation) {
      return "selected";
    } else {
      return "";
    }
  }


  allChannels(channels) {
    return channels.map( channel => {
      return (
        <li
          className={this.classNameHelper(channel)}
          key={channel.id}
          onClick={this.handleClick(channel)}
        >
          <span>#</span> {channel.name}
        </li>
      );
    });
  }

  handleClick(channel) {
    return () => {
      this.props.changeConversation(channel);
    };
  }
}
export default Channels;
