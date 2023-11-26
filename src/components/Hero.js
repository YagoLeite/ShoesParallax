"use client";
import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Flex ref={ref} h="200vh" w="100%" position="relative" overflow="hidden">
      <Flex
        as={motion.div}
        style={{
          scale: scale,
          y: scale,
          translateX: "-50%",
          translateY: translateY,
        }}
        height="200px" // Diameter of the donut
        width="200px" // Diameter of the donut
        borderRadius="50%" // Makes the box a circle
        border="20px solid" // Width and style of the donut's ring
        borderColor="white" // Color of the donut's ring
        bg="transparent"
        justify="center"
        align="center"
        position="absolute"
        top="25%"
        left="50%"
      >
        Scroll Down
      </Flex>
    </Flex>
  );
};

export default Hero;
