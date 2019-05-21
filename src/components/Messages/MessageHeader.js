import React from "react";
import { Header, Segment, Icon, Input } from "semantic-ui-react";

class MessageHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      handleStar,
      isChannelStarred
    } = this.props;
    return (
      <Segment clearing>
        <Header fluid="true" as="h2" floated="left" style={{ marginButton: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                onClick={handleStar}
                name={isChannelStarred ? "star" : "star outline"}
                color={isChannelStarred ? "yellow" : "black"}
              />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
        <Header floated="right">
          <Input
            loading={searchLoading}
            size="mini"
            onChange={handleSearchChange}
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}
export default MessageHeader;
