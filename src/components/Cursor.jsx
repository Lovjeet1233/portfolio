import React, { useEffect, useState } from "react";
import "./Cursor.css"; // Ensure to create this CSS file

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="custom-cursor" style={{ left: position.x, top: position.y }} />;
};

export default Cursor;
