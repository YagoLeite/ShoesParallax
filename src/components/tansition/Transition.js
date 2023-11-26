"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Transition = ({ transitionAnim }) => {
  const transitionFlexVariants = {
    centered: { x: "0%", transition: { staggerChildren: 0.2 } },
    right: {
      x: "0%",
      zIndex: -10,
      transition: { staggerChildren: 0.2 },
    },
  };

  //   const childVariants = {
  //     hidden: { x: "0%", transition: { duration: 1 } },
  //     visible: { x: "100vw", transition: { duration: 1 } },
  //   };

  const childVariants = {
    centered: { x: "0%", transition: { duration: 1 } },
    right: { x: "100vw", transition: { duration: 1 } },
  };

  return (
    <Flex
      as={motion.div}
      variants={transitionFlexVariants}
      initial="centered"
      animate={transitionAnim}
      h="100vh"
      w="100%"
      overflow="hidden"
      direction="column"
    >
      {[...Array(5)].map((_, index) => (
        <Flex
          as={motion.div}
          key={index}
          variants={childVariants}
          flex="1"
          bg="white"
          //   style={{ flex: "1", background: `hsl(${index * 50}, 70%, 50%)` }}
        />
      ))}
    </Flex>
  );
};

export default Transition;
