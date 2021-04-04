import React, { Component } from "react";
import { Box, Image, Flex, Text, Link } from "@chakra-ui/react";

class UserCard extends Component {
  render() {
    return (
      <Box align="center">
        <Flex mx="20" mt="20" bg="white" borderRadius="2xl" w="container.md">
          <Image
            m="3"
            w="72"
            rounded="full"
            src={this.props.user.avatar_url}
            alt="user_avatar"
          />
          <Box mx="5" my="10">
            <Text
              fontFamily="sans-serif"
              fontSize="larger"
              fontWeight="semibold"
            >
              {this.props.user.name}
            </Text>
            <Text textColor="gray.500">{this.props.user.login}</Text>
            <Text>
              Location: <i> {this.props.user.location} </i>
            </Text>
            <Text>Bio: {this.props.user.bio}</Text>
            <Text>
              Following: <strong>{this.props.user.following}</strong>
            </Text>
            <Text>
              Followers: <strong>{this.props.user.followers}</strong>
            </Text>
            <Text>
              Company: <strong>{this.props.user.company}</strong>
            </Text>
            <Text>
              Blog: <strong>{this.props.user.blog}</strong>
            </Text>
            <Text>
              Profile:{" "}
              <Link color="purple" fontWeight="medium">
                {this.props.user.url}
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    );
  }
}
export default UserCard;
