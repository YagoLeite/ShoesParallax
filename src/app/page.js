"use client";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import ProductWrapper from "@/components/Product/ProductWrapper";
import Backside from "@/components/tansition/Backside";
import Transition from "@/components/tansition/Transition";

import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const test = [
  {
    image: `url(/ShoeOneImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
    buttonColor: ["red", "#f32f2f"],
    color: "white",
  },
  {
    image: `url(/ShoeTwoImage.png)`,
    dolar: "320",
    cents: "25",
    description: "Neon Glide Runners",
    buttonColor: ["rgb(112 229 84)", "rgb(118 217 95)"],
    color: "black",
  },
  {
    image: `url(/ShoeThreeImage.png)`,
    dolar: "10",
    cents: "59",
    description: "Purple Pulse Sneakers",
    buttonColor: ["rgb(147 57 225)", "rgb(150 70 219)"],
    color: "white",
  },
  {
    image: `url(/ShoeFourImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Charcoal Craft Oxfords",
    buttonColor: ["rgb(147 57 225)", "rgb(150 70 219)"],
    color: "white",
  },
  {
    image: `url(/ShoeFiveImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Blush Runner Classics",
    buttonColor: ["rgb(213 140 187)", "rgb(203 103 167)"],
    color: "black",
  },
  {
    image: `url(/ShoeOneImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Nike Free RN Flex - Crimson Rush",
    buttonColor: ["red", "#f32f2f"],
    color: "white",
  },
  {
    image: `url(/ShoeTwoImage.png)`,
    dolar: "320",
    cents: "25",
    description: "Volt Sprint Trainers",
    buttonColor: ["rgb(112 229 84)", "rgb(118 217 95)"],
    color: "black",
  },
  {
    image: `url(/ShoeThreeImage.png)`,
    dolar: "10",
    cents: "59",
    description: "Twilight Blaze Runners",
    buttonColor: ["rgb(147 57 225)", "rgb(150 70 219)"],
    color: "white",
  },
  {
    image: `url(/ShoeFourImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Graphite Gentleman Derbies",
    buttonColor: ["rgb(147 57 225)", "rgb(150 70 219)"],
    color: "white",
  },
  {
    image: `url(/ShoeFiveImage.png)`,
    dolar: "120",
    cents: "99",
    description: "Rosy Retro Sneakers",
    buttonColor: ["rgb(213 140 187)", "rgb(203 103 167)"],
    color: "black",
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
        px="10px"
        position="relative"
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
