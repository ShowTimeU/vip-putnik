import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBallRef.current, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
    };

    const onMouseHover = () => {
      gsap.to(bigBallRef.current, {
        duration: 0.3,
        scale: 2,
      });
      setIsHovered(true);
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBallRef.current, {
        duration: 0.3,
        scale: 1,
      });
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
    <div className="fixed pointer-events-none z-50">
      <div ref={bigBallRef}>
        <svg height="30" width="30">
          <circle
            cx="15"
            cy="15"
            r="12"
            strokeWidth="0"
            fillOpacity={isHovered ? "0.4" : "1"}
            fill="#FFD954"
          ></circle>
        </svg>
      </div>
    </div>
  );
};
