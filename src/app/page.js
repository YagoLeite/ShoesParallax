"use client";
import Hero from "@/components/Hero";
import ProductWrapper from "@/components/Product/ProductWrapper";
import Backside from "@/components/tansition/Backside";
import Transition from "@/components/tansition/Transition";

import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const test = [
  {
    image: `url(/ShoeOneImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeTwoImage.png)`,
    dolar: "320",
    cents: "25",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeThreeImage.png)`,
    dolar: "10",
    cents: "59",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeFourImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeFiveImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeOneImage.png)`,
    dolar: "300",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeTwoImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeThreeImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
  {
    image: `url(/ShoeThreeImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
  },
];

const variants = {
  centered: {
    rotateY: "0deg",
    rotateX: "0deg",
    transition: { duration: 0.7, type: "linear" },
  },
  rotated: {
    rotateY: "45deg",
    rotateX: "-20deg",
    x: "-20vw",
    transition: { duration: 0.7 },
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

  console.log(isRotated);

  return (
    <Flex bg="black">
      <Flex
        w="100%"
        gap="20px"
        direction="column"
        overflow="hidden"
        // bg="#4341412e"
        bg="black"
        as={motion.div}
        variants={variants}
        initial="centered"
        animate={isRotated ? "rotated" : "centered"}
        color="white"
      >
        <Hero />
        {test.map((item, index) => (
          <ProductWrapper
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
