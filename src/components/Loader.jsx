// Loader.jsx
import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";

const Loader = () => {
  const [dotCount] = useState(3); // Number of dots
  const [activeDot, setActiveDot] = useState(0); // Active dot index

  // Function to rotate active dot
  const rotateDot = () => {
    setActiveDot((prevDot) => (prevDot + 1) % dotCount);
  };

  useEffect(() => {
    const interval = setInterval(rotateDot, 300); // Rotate every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Html>
      <div className="flex justify-center items-center">
        {Array.from(Array(dotCount).keys()).map((index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${
              activeDot === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </Html>
  );
};

export default Loader;