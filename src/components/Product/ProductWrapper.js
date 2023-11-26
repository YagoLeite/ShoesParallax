"use client";
import React, { useRef } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ProductWrapper = ({ data, startTransition, setIsRotated }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0.4, 1], [0.5, 1]);
  const textProgress = useTransform(scrollYProgress, [0, 1], ["60%", "20%"]);
  const backTextProgress = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const textProgressTwo = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["100%", "60%"]
  );

  return (
    <Flex
      as={motion.div}
      ref={ref}
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      position="relative"
    >
      <Flex
        as={motion.div}
        style={{ scale: scaleProgress }}
        w={["250px", "500px", "600px"]}
        h={["250px", "400px", "500px"]}
        backgroundImage={data.image}
        backgroundSize="cover"
        backgroundPosition="center"
        onClick={() => startTransition()}
        cursor="pointer"
      />
      <Flex
        as={motion.div}
        fontSize="60px"
        overflow="hidden"
        position="absolute"
        top="60%"
        w="fit-content"
        right="20%"
        h="fit-content"
        style={{ top: textProgress, scale: scaleProgress }}
        onClick={() => setIsRotated((prev) => !prev)}
      >
        <Price data={data} />
      </Flex>
      <Flex
        as={motion.div}
        fontSize="60px"
        overflow="hidden"
        position="absolute"
        // top="40%"
        w="fit-content"
        left="10%"
        // bg="green"

        style={{ top: textProgressTwo, scale: scaleProgress }}
      >
        <Description
          data={data}
          startTransition={startTransition}
          setIsRotated={setIsRotated}
        />
      </Flex>
    </Flex>
  );
};

function Price({ data }) {
  const ref = useRef(null);
  const textIsInView = useInView(ref);
  const containerVariants = {
    inView: {
      transition: { delayChildren: 0.4, staggerChildren: 0.2 },
    },
    outOfView: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const variants = {
    inView: {
      y: "0px",
      transition: {
        duration: 0.3,
      },
    },
    outOfView: {
      y: "100px",
      transition: { duration: 0 },
    },
  };

  return (
    <Flex
      as={motion.div}
      ref={ref}
      variants={containerVariants}
      animate={textIsInView ? "inView" : "outOfView"}
      gap="5px"
      fontWeight="extrabold"
      fontSize={["50px", "60px", "80px"]}
      style={{ WebkitTextStroke: "4px white" }}
      color="transparent"
    >
      <Flex as={motion.div} variants={variants}>
        <Text>${data.dolar},</Text>
      </Flex>
      <Flex as={motion.div} variants={variants}>
        <Text>{data.cents}</Text>
      </Flex>
    </Flex>
  );
}

function Description({ data, startTransition, setIsRotated }) {
  const ref = useRef(null);
  const textIsInView = useInView(ref);
  const containerVariants = {
    inView: {
      transition: { delayChildren: 1, staggerChildren: 0.2 },
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
      y: "100%",
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
      maxW="500px"
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
      <Flex h="fit-content" gap="10px" w="100%" overflow="hidden">
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
          fontSize={["16px", "20px"]}
        >
          <Text>Options</Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default ProductWrapper;
