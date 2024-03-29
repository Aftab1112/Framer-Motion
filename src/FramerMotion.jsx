import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function FramerMotion() {
  const [removeBox, setRemoveBox] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRemoveBox(false);
    }, 5000);
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen  flex items-center justify-center">
        <AnimatePresence>
          {removeBox ? (
            <motion.div
              initial={{ opacity: 0, translateY: -500 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 500 }}
              transition={{ duration: 5 }}
              className="w-60 h-60 bg-slate-500"
            ></motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FramerMotion;
