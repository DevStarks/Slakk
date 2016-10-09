import React from 'react';
import { hashToArray } from '../../utils/helpers';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const channelArr = hashToArray(this.props.channels);
    return (
      <ul className="channels">
        <h2>CHANNELS ({channelArr.length})</h2>
        {this.allChannels(channelArr)}
      </ul>
    );
  }


  allChannels(channels) {
    return channels.map( channel => {
      return <li key={channel.id} onClick={this.handleClick(channel.id)}># {channel.name}</li>;
    });
  }

  handleClick(channelID) {
    return () => {
      this.props.getMessages(channelID);
    };
  }
}
export default Channels;
