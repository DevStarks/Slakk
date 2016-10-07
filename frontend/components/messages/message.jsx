import React from 'react';
import ReactDOM from 'react-dom';
import { timeFromDateObj } from '../../utils/helpers';
import MessageFormContainer from './message_form_container';



class Message extends React.Component {

  constructor(props) {
    super(props);

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.unmountEdit = this.unmountEdit.bind(this);

    this.state = {
      type: "show"
    };
  }

  handleEditClick() {
    this.setState({ type: "edit" });
  }

  handleDeleteClick() {
    this.props.deleteMessage(this.props.info.id);
  }

  unmountEdit() {
    this.setState({ type: "show" });
  }

  render() {
    const { info: { body, created_at, author } } = this.props;

    if (this.state.type === "show") {
      return (
        <div className="message-content">
          <img className="author-thumbnail" src={author.image_url}></img>
          <h3>{author.username} {timeFromDateObj(created_at)}</h3>
          <p>{body}</p>

          <ul className="message-actions">
            <li onClick={this.handleEditClick}>Edit message</li>
            <li onClick={this.handleDeleteClick}>Delete message</li>
          </ul>
        </div>
      );
    } else if (this.state.type === "edit") {
      return (
        <MessageFormContainer
          ref="messageEditForm"
          type="edit"
          messageInfo={this.props.info}
          unmount={this.unmountEdit} />
      );
    }
  }
}


export default Message;
