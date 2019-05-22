import React from "react";
import firebase from "../../firebase";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
class UserPanel extends React.Component {
  state = {
    user: this.props.currentUser
  };
  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          signed in as
          <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    { key: "avatar", text: <span>Change Avatar</span> },
    { key: "signout", text: <span onClick={this.handleSignOut}>Sign Out</span> }
  ];

  componentDidMount() {
    this.setState({ user: this.props.currentUser });
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signout");
      });
  };

  render() {
    const { user } = this.state;
    const { primaryColor } = this.props;
    return (
      <Grid style={{ background: primaryColor }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
            <Header style={{ padding: "0.25em" }} as="h4" inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src={user.photoURL} spaced="right" avatar />
                    {user.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
