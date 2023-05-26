import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBallRef.current, {
        duration: 0.4,
        x: e.pageX - 10,
        y: e.pageY - 10,
      });
    };

    const onMouseHover = () => {
      setIsHovered(true);
    };

    const onMouseHoverOut = () => {
      setIsHovered(false);
    };

    document.body.addEventListener("mousemove", onMouseMove);

    const hoverables = document.querySelectorAll(".hoverable");

    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", onMouseHover);
      hoverable.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", onMouseHover);
        hoverable.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="fixed pointer-events-none z-[51]">
      <div ref={bigBallRef}>
        <svg height="24" width="24">
          <circle
            cx="10"
            cy="10"
            r="10"
            strokeWidth="0"
            fill={isHovered ? "#03B7F0" : "#FFD954"}
          ></circle>
        </svg>
      </div>
    </div>
  );
};
