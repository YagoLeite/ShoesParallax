import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";

const ProductPrice = ({ data }) => {
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
};

export default ProductPrice;
