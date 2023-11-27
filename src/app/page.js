"use client";
import Hero from "@/components/Hero";
import Product from "@/components/Product/Product";
import { data } from "@/components/data/data";
import Backside from "@/components/tansition/Backside";
import Transition from "@/components/tansition/Transition";

import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  centered: {
    rotateY: "0deg",
    rotateX: "0deg",
    x: "0vw",
    transition: { duration: 0.7, type: "linear" },
  },
  rotated: {
    rotateY: "45deg",
    rotateX: "-20deg",
    x: "-20vw",
    transition: { duration: 0.7, type: "linear" },
  },
};

export default function Home() {
  const [transitionAnim, setTransitionAnim] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const startTransition = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionAnim("centered");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      setTransitionAnim("right");
    }, (1.5 + 0.2 * 4) * 1000);
    setTimeout(() => {
      setIsAnimating(false);
    }, (1.5 + 0.2 * 4) * 2000);
  };

  return (
    <Flex bg="black">
      <Flex
        w="100%"
        gap="20px"
        direction="column"
        overflow="hidden"
        bg="black"
        as={motion.div}
        variants={variants}
        initial="centered"
        animate={isRotated ? "rotated" : "centered"}
        color="white"
        px="10px"
        position="relative"
      >
        <Hero />
        {data.map((item, index) => (
          <Product
            key={index}
            data={item}
            startTransition={startTransition}
            setIsRotated={setIsRotated}
          />
        ))}
      </Flex>
      <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        style={{ pointerEvents: "none" }}
      >
        <Transition transitionAnim={transitionAnim} />
      </Flex>
      <Backside isRotated={isRotated} setIsRotated={setIsRotated} />
    </Flex>
  );
}
