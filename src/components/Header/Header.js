import React from "react";
import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      w="100%"
      h="70px"
      position="sticky"
      top="0"
      left="0"
      right="0"
      bg="orange"
    />
  );
};

export default Header;
