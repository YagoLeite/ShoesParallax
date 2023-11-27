"use client";
import React, { useRef } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";

const Product = ({ data, startTransition, setIsRotated }) => {
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
      >
        <ProductPrice data={data} />
      </Flex>
      <Flex
        as={motion.div}
        fontSize="60px"
        overflow="hidden"
        position="absolute"
        w="fit-content"
        left="10%"
        style={{ top: textProgressTwo, scale: scaleProgress }}
      >
        <ProductDescription
          data={data}
          startTransition={startTransition}
          setIsRotated={setIsRotated}
        />
      </Flex>
    </Flex>
  );
};

export default Product;
