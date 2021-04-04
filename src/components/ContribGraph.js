import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Text } from "@chakra-ui/react";
import ReactTooltip from "react-tooltip";

const exampleTheme = {
  background: "transparent",
  text: "#000",
  grade4: "#322659",
  grade3: "#553C9A",
  grade2: "#805AD5",
  grade1: "#B794F4",
  grade0: "#eee",
};

const ContribGraph = (props) => {
  const { user } = props;
  return (
    <Box align="center">
      <Box
        mx="20"
        mt="4"
        bg="white"
        borderRadius="2xl"
        w="container.md"
        align="center"
      >
        <Text align="center" mb="2">
          Activity overview
        </Text>
        <GitHubCalendar username={user.login} theme={exampleTheme}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Box>
    </Box>
  );
};
export default ContribGraph;
