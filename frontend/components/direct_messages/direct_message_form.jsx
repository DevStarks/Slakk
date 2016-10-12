import React from 'react';
import UserResultItem from './user_result_item';
import UserSnippet from './user_snippet';

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: "",
      selectedUsers: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }

  componentWillMount() {
    this.props.searchUsers(this.state);
  }

  handleChange(e) {
    this.setState({ searchData: e.currentTarget.value });
  }

  selectUser(user) {
    return () => {
      const selectedUsers = this.state.selectedUsers;
      selectedUsers.push(<UserSnippet key={user.id} info={user}/>);
      this.setState({ selectedUsers });
    };
  }

  searchResults() {
    if (this.props.searchResults) {
      return this.props.searchResults.map( user => {
        return (
          <UserResultItem
            key={user.id}
            userData={user}
            selectUser={this.selectUser(user)}
          />
        );
      });
    }
  }


  render() {
    return (
      <div className="base-form search">
        <form className="channel-form group" >
          <div onClick={this.props.closeDirectMessageForm}>
            <img src="assets/exit.png" />
            <p>esc</p>
          </div>
          <h1>Direct Messages</h1>
          <section>
            {this.state.selectedUsers}
            <input
              placeholder="Find or start a conversation"
              value={this.state.searchData}
              onChange={this.handleChange}
              />
          </section>
          <ul>
            <h4>Users that can be added to the message</h4>
            {this.searchResults()}
          </ul>
          </form>
      </div>
    );
  }
}

export default DirectMessageForm;
