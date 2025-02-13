import { useState } from "react";
import { motion } from "framer-motion";

export default function HoveringFlipCard() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh" }}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ y: -40 }}
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ height: "100vh", aspectRatio: "auto", display: "flex", alignItems: "center", justifyContent: "center", left: "50%", transform: "translateX(-10%)" }}
      >
        <motion.div
          className="relative cursor-pointer"
          onClick={handleFlip}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0, rotateX: flipped ? 10 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", display: "flex", alignItems: "center", justifyContent: "center", width: "auto", height: "100%", perspective: "1000px" }}
        >
          {/* Front Image */}
          <motion.img
            src="/page01.png"
            className="absolute w-full h-full rounded-lg"
            whileHover={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            style={{ backfaceVisibility: "hidden", objectFit: "contain", transformOrigin: "left center" }}
          />

          {/* Back Image (Hidden Initially) */}
          <motion.img
            src="/page02.png"
            className="absolute w-full h-full rounded-lg"
            whileHover={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", objectFit: "contain", transformOrigin: "left center" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
