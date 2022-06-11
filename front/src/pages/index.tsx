import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex direction="column" w="100%">
        <Menu />
      </Flex>
    </Flex>
  );
};

export default Home;
