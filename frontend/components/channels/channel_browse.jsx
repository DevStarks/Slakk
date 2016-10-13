import React from 'react';
import ChannelItem from './channel_item';

class ChannelBrowse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectChannel = this.selectChannel.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }

  componentWillMount() {
    this.props.searchChannels(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.searchChannels(this.state);
    }
  }

  handleChange(e) {
    this.setState({ searchData: e.currentTarget.value });
  }

  selectChannel(channel) {
    return () => {
      if (this.props.userChannels[channel.id]) {
        this.props.changeConversation(channel);
      } else {
        this.props.connectToChannel(channel.id);
      }
      this.props.closeChannelBrowse();
    };
  }

  searchResults() {
    if (Object.keys(this.props.searchResults).length) {
      return this.props.searchResults.map( channel => {
        return (
          <ChannelItem
            key={channel.id}
            channelData={channel}
            selectChannel={this.selectChannel(channel)}
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="base-form search">
        <form className="channel-form group" >
          <div onClick={this.props.closeChannelBrowse}>
            <img src={slakkAssets.escSign} />
            <p>esc</p>
          </div>
          <h1>Browse all {this.props.channelCount} channels</h1>
          <input
            placeholder="Search channels"
            value={this.state.searchData}
            onChange={this.handleChange}
          />
        <ul>
          <h4>Channels you can join</h4>
          {this.searchResults()}
        </ul>
        </form>
      </div>
    );
  }
}

export default ChannelBrowse;
