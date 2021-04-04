import React, { Component } from "react";
import { Box, Flex, Heading, Image, Tooltip, Link } from "@chakra-ui/react";

class Followers extends Component {
  render() {
    return (
      <Box align="center">
        <Box mx="20" bg="white" borderRadius="2xl" w="container.md">
          <Heading as="h4"> Followers </Heading>
          {this.props.followers.map((follower, idx) => {
            return (
              <Flex display="inline-flex" key={idx}>
                <Link href={follower.url}>
                  <Tooltip label={follower.login}>
                    <Image
                      w="30"
                      h="20"
                      m="5"
                      borderRadius="full"
                      src={follower.avatar_url}
                      alt="follower"
                    />
                  </Tooltip>
                </Link>
              </Flex>
            );
          })}
        </Box>
      </Box>
    );
  }
}
export default Followers;
