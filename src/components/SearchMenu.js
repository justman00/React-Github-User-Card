import React, { Component } from "react";
import {
  Flex,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import githubicon from "../githubicon.png";

class SearchMenu extends Component {
  state = { name: "" };

  handleClick = (evt) => {
    evt.preventDefault();
    console.log("input value: ", this.state.name);
    this.props.getUser(this.state.name);
    this.props.getFollowers(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <Flex bg="purple.600">
        <Flex>
          <Image
            src={githubicon}
            alt="github_logo"
            w="30"
            h="20"
            m="5"
            borderRadius="full"
          />
          <Text fontSize="3xl" fontWeight="bold" mt="9" mr="5" color="white">
            GitHub User Card
          </Text>
        </Flex>
        <Flex width={{ base: "100", md: "80", sm: "80" }}>
          <InputGroup mt="10" size="md">
            <Input
              focusBorderColor="white"
              //pr="4.5rem"
              textColor="white"
              bg="whiteAlpha.500"
              type="text"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                colorScheme="whiteAlpha"
                onClick={this.handleClick}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    );
  }
}
export default SearchMenu;
