"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const containerVariants = {
  notVisible: { x: "0%", transition: { duration: 0 } },
  visible: {
    x: "0%",
    transition: { staggerChildren: 0.4, delayChildren: 0.3 },
  },
};

const childVariants = {
  notVisible: { opacity: 0, transition: { duration: 0 } },
  visible: { opacity: 1, transition: 0.3 },
};

const Backside = ({ isRotated, setIsRotated }) => {
  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      onClick={() => setIsRotated(false)}
      animate={isRotated ? "visible" : "notVisible"}
      position="fixed"
      top="0"
      left="0"
      right="0"
      h="100vh"
      w="100%"
      gap="20px"
      zIndex={isRotated ? "2" : "-1"}
      bg={isRotated ? "transparent" : "black"}
      justify="end"
    >
      <Flex direction="column" w="35%" gap="20px">
        {[...Array(5)].map((_, index) => (
          <MyButton
            key={index}
            variants={childVariants}
            setIsRotated={setIsRotated}
          />
        ))}
      </Flex>
    </Flex>
  );
};

function MyButton({ setIsRotated }) {
  return (
    <Flex w="100%" h="100%" justify="center" align="center" fontSize="30px">
      <Flex
        cursor="pointer"
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        variants={childVariants}
        h="80px"
        w="200px"
        borderRadius="20px"
        bg="green"
        justify="center"
        align="center"
        onClick={() => setIsRotated(false)}
      >
        Close
      </Flex>
    </Flex>
  );
}

export default Backside;
