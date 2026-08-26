// MainTour.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import TourContent from "./TourContent";

const MainTour = () => {
  // Track whether the mouse is hovering over the container.
  // When true, we pause the animation.
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array so the loop feels seamless.
  // (Standard trick for infinite marquee/scroll effects —
  // when the first set finishes, the duplicate is right there.)
  const duplicatedContent = [...TourContent, ...TourContent];

  return (
    <div
      style={{
        overflow: "hidden", // hides the part of the track outside the viewport
        width: "100%",
        whiteSpace: "nowrap",
      }}
      // Pause on hover, resume on mouse leave
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "20px",
        }}
        // Animate the track from 0 to -50% (since content is duplicated,
        // -50% lines up perfectly with the start of the duplicate set)
        animate={{
          x: isHovered ? undefined : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 15,       // total time for one full loop — tweak for speed
            ease: "linear",     // constant speed, no easing bounce
            repeat: Infinity,   // makes it loop forever
            repeatType: "loop",
          },
        }}
      >
        {duplicatedContent.map((tour, index) => (
          <motion.div
            key={`${tour.id}-${index}`} // unique key even with duplicated ids
            style={{
              minWidth: "250px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={tour.image}
              alt={tour.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <p style={{ textAlign: "center", padding: "8px 0" }}>
              {tour.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MainTour;