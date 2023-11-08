import React, { useEffect, useRef } from "react";
import "./circularDashedProgress.scss";

const total = 34;

const CircularProgressBar = ({
  percent,
  className,
  colorProgress = "#fff",
}) => {
  const c1 = useRef(null);
  const c2 = useRef(null);

  const update = (score) => {
    c1.current.setAttribute(
      "stroke-dasharray",
      `${(1000 - total * 5) / total} 5`
    );
    c2.current.setAttribute(
      "stroke-dasharray",
      `${(1000 / total) * score} 1000`
    );
  };

  useEffect(() => {
    update(Math.floor(11 * (percent / 100)));
  }, [percent]);

  return (
    <div className={`progress-container ${className}`}>
      <svg
        viewBox="0 0 200 3"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="mask01">
            <circle
              ref={c1}
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeDasharray="25 5"
              pathLength="1000"
            />
          </mask>
        </defs>
        <g transform="rotate(-90 50 50)">
          <circle
            mask="url(#mask01)"
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="10"
          />
          <circle
            ref={c2}
            mask="url(#mask01)"
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={colorProgress}
            strokeWidth="10"
            strokeDasharray="500 1000"
            pathLength="1000"
          />
        </g>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
