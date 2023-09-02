import React, { useState, useEffect } from "react";
import "./Stack.css";
import Pin_Small from "../../assets/pin_small.png";

import { motion } from "framer-motion";

type Props = {};

export default function Stack({ ...props }: Props) {
  return (
    <div className="Stack">
      <motion.div
        className="Stack__pin-tip"
        initial={{ height: 0 }}
        animate={{ height: 65 }}
        transition={{ delay: 1.4, style: "tween", duration: 0.6 }}
      ></motion.div>

      <img
        src={Pin_Small}
        alt="small pin"
        height="167"
        width="78"
        className="Stack__pin"
      />

      <motion.div
        className="Stack__note"
        initial={{ top: 0 }}
        animate={{ top: ["0%", "42%"] }}
        transition={{ duration: 2 }}
      >
        halso
      </motion.div>
    </div>
  );
}
