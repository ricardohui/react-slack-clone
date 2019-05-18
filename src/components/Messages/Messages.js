import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessageHeader from "./MessageHeader";
import firebase from "../../firebase";
import MessageForm from "./MessageForm";
import Message from "./Message";
import ProgressBar from "./ProgressBar";
class Messages extends React.Component {
  state = {
    messages: [],
    messagesRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    messagesLoading: true,
    progressBar: false
  };

  componentDidMount() {
    console.log("componentDidMount is called");
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      console.log("messages are updated");
      console.log(loadedMessages);
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
      });
    });
  };

  displayMessages = messages => {
    console.log("displayMessages is called");
    console.log("there are total of messages:" + messages.length);
    return (
      messages.length > 0 &&
      messages.map(message => (
        <Message
          key={message.timestamp}
          message={message}
          user={this.state.user}
        />
      ))
    );
  };

  isProgressBarVisible = percent => {
    if (percent > 0) {
      this.setState({ ProgressBar: true });
    }
  };

  render() {
    const { messagesRef, messages, channel, user, progressBar } = this.state;
    return (
      <React.Fragment>
        <MessageHeader />
        <Segment>
          <Comment.Group
            className={ProgressBar ? "message_progress" : "messages"}
          >
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
          isProgressBarVisible={this.isProgressBarVisible}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
