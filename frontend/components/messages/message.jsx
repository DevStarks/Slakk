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
    this.menuOn = this.menuOn.bind(this);
    this.buttonHelper = this.buttonHelper.bind(this);
    this.authorInfoHelper = this.authorInfoHelper.bind(this);
    this.articleClassNameHelper = this.articleClassNameHelper.bind(this);

    this.state = {
      type: "show"
    };
  }

  componentDidUpdate() {
    if (this.state.type === "edit") {
      $('.edit-message-form').on("click", e => {
        e.stopPropagation();
      });
    }
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

  menuOn() {
    this.refs.messageActions.className = "message-actions visible";
    this.refs.actionsButton.className = "visible";

    const messageComponent = this;
    $('body').on("click", (e) => {
      if (messageComponent.state.type === "show") {
        messageComponent.refs.messageActions.className = "message-actions hidden";
        messageComponent.refs.actionsButton.className = "hidden";
      }
      messageComponent.unmountEdit();
      $('body').off('click');
    });
  }

  buttonHelper() {
    if (this.props.currentUser &&
       (this.props.currentUser.id ===
        this.props.info.author.id)) {
      return (
        <button ref="actionsButton" onClick={this.menuOn}>...</button>
      );
    }
  }

  authorInfoHelper(author, created_at) {
    if (this.props.type === "condensed") {
      return (
        <section className="condensed">
        <img className="author-thumbnail hidden" src={author.image_url}></img>
        <h3 className="hidden">{author.username} </h3>
        <span className="hidden">{timeFromDateObj(created_at)}</span>
        </section>
      );
    } else {
      return (
        <section>
        <img className="author-thumbnail" src={author.image_url}></img>
        <h3>{author.username} </h3>
        <span>{timeFromDateObj(created_at)}</span>
        <br />
        </section>
      );
    }

  }

  articleClassNameHelper() {
    if (this.props.type === "condensed") {
      return "message-content group condensed-message";
    } else {
      return "message-content group";
    }
  }

  render() {
    const { info: { body, created_at, author } } = this.props;

    if (this.state.type === "show") {
      return (
        <article className={this.articleClassNameHelper()}>

          {this.authorInfoHelper(author, created_at)}

          <div>
            <p>{body}</p>
          </div>
          {this.buttonHelper()}

          <ul ref="messageActions" className="message-actions hidden">
            <li onClick={this.handleEditClick}>Edit message</li>
            <li onClick={this.handleDeleteClick}>Delete message</li>
          </ul>
        </article>
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
