import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

const ProductDescription = ({ data, startTransition, setIsRotated }) => {
  const ref = useRef(null);
  const textIsInView = useInView(ref);
  const containerVariants = {
    inView: {
      transition: { delayChildren: 0.5, staggerChildren: 0.2 },
    },
    outOfView: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const variants = {
    inView: {
      y: "0%",
      transition: {
        duration: 0.3,
      },
    },
    outOfView: {
      y: "210%",
      transition: { duration: 0 },
    },
  };

  return (
    <Flex
      as={motion.div}
      ref={ref}
      variants={containerVariants}
      animate={textIsInView ? "inView" : "outOfView"}
      gap="25px"
      fontWeight="bold"
      fontSize={["24px", "30px", "60px"]}
      w="100%"
      minW={["300px", "400px"]}
      maxW={["300px", "500px", "500px"]}
      h="fit-content"
      direction="column"
    >
      <Flex h="fit-content" w="fit-content" overflow="hidden">
        <Flex
          as={motion.div}
          variants={variants}
          style={{ pointerEvents: "none" }}
        >
          <Text>{data.description}</Text>
        </Flex>
      </Flex>
      <Flex
        h="fit-content"
        gap="10px"
        w="100%"
        align="center"
        overflow="hidden"
      >
        <Button
          as={motion.button}
          variants={variants}
          whileTap={{ scale: 0.9, bg: data.buttonColor[1] }}
          //   whileHover={{ bg: data.buttonColor[1] }}
          bg={data.buttonColor[0]}
          _hover={{ bg: data.buttonColor[1] }}
          _active={data.buttonColor[1]}
          color={data.color}
          w="70%"
          h={["50px", "70px"]}
          onClick={() => startTransition()}
          fontSize="30px"
        >
          Buy now
        </Button>
        <Button
          as={motion.button}
          variants={variants}
          whileTap={{ scale: 0.9, bg: data.buttonColor[1] }}
          //   //   whileHover={{ bg: data.buttonColor[1] }}
          //   bg={data.buttonColor[0]}
          //   _hover={{ bg: data.buttonColor[1] }}
          //   _active={data.buttonColor[1]}
          //   color={data.color}
          px="5px"
          w="20%"
          h={["50px", "70px"]}
          onClick={() => setIsRotated(true)}
          fontSize={["15px", "20px"]}
        >
          <Text>Options</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductDescription;
