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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.placeholderHelper = this.placeholderHelper.bind(this);
    this.classNameHelper = this.classNameHelper.bind(this);
    this.selectedUsersSnippets = this.selectedUsersSnippets.bind(this);
    this.removeSelectedFromResults = this.removeSelectedFromResults.bind(this);
  }

  componentWillMount() {
    this.props.searchUsers(this.state);
  }

  handleChange(e) {
    const newState = { searchData: e.currentTarget.value };
    this.setState(newState);
    this.props.searchUsers(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const selectedIDs = this.state.selectedUsers.map(user => user.id);
    this.props.createChannel({ user_ids: selectedIDs, direct_message: true });
    this.props.closeDirectMessageForm();
  }

  selectUser(user) {
    return () => {
      const selectedUsers = this.state.selectedUsers;
      selectedUsers.push(user);
      this.setState({ selectedUsers });
    };
  }

  placeholderHelper() {
    if (!this.state.selectedUsers.length) {
      return "Find or start a conversation";
    } else {
      return "";
    }
  }

  classNameHelper() {
    if (!this.state.selectedUsers.length) {
      return "";
    } else {
      return "shortened-input";
    }
  }

  removeSelectedFromResults(userResults) {
    return userResults.filter( result => {
      return this.state.selectedUsers.indexOf(result) === -1;
    });
  }

  searchResults() {
    if (this.props.searchResults) {
      const results = this.props.searchResults;
      return this.removeSelectedFromResults(results).map( user => {
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

  deselect(userToRemove) {
    return () => {
      const newSelectedUsers = this.state.selectedUsers.filter( user => {
        return user !== userToRemove;
      });
      this.setState({ selectedUsers: newSelectedUsers });
    };
  }

  selectedUsersSnippets() {
    return this.state.selectedUsers.map( user => {
      return (
        <UserSnippet key={user.id} deselect={this.deselect(user)} info={user}/>
      );
    });
  }


  render() {
    return (
      <div className="base-form search">
        <form className="channel-form group" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeDirectMessageForm}>
            <img src={slakkAssets.escSign} />
            <p>esc</p>
          </div>
          <h1>Direct Messages</h1>
          <section className="user-search-bar">
            <ul>
              {this.selectedUsersSnippets()}
              <input
                className={this.classNameHelper()}
                placeholder={this.placeholderHelper()}
                value={this.state.searchData}
                onChange={this.handleChange}
                />
            </ul>
          </section>
          <button type="submit" id="dm-create-button">Go</button>
          <ul className="user-search-results">
            <h4>Users that can be added to the message</h4>
            {this.searchResults()}
          </ul>
        </form>
      </div>
    );
  }
}

export default DirectMessageForm;
