"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedSubscribeButtonProps {
  brand: string;
  subscribeStatus: boolean;
  buttonTextColor?: string;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  buttonOnClick: () => void; // 添加 onClick 事件处理函数类型

}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({buttonOnClick, brand, subscribeStatus, buttonTextColor, changeText, initialText}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  const handleClick = (isSubscribed: boolean | ((prevState: boolean) => boolean)) => {
    isSubscribed&&buttonOnClick()
    setIsSubscribed(isSubscribed)
  }

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[200px] items-center justify-center bg-white p-[10px] rounded-md"
          onClick={() => handleClick(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: brand }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
          style={{ backgroundColor: brand, color: buttonTextColor }}
          onClick={() => handleClick(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
