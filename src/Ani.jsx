import { useEffect } from "react";
import "./Ani.css";

const Ani = () => {
  useEffect(() => {
    const container = document.getElementById("dots-container");
    if (!container) return;

    const dotsCount = 300; // Keep it reasonable
    const dots = [];

    function createDot() {
      const dot = document.createElement("div");
      dot.className = "blue-dot";

      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const size = 3 + Math.random() * 10;

      // Adjusted speeds
      const speedX = 1 + Math.random() * 4; // Max 5 px/frame
      const speedY = 1 + Math.random() * 4;

      let directionX = Math.random() > 0.5 ? 1 : -1;
      let directionY = Math.random() > 0.5 ? 1 : -1;

      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      container.appendChild(dot);

      let x = posX;
      let y = posY;

      function animate() {
        x += speedX * directionX;
        y += speedY * directionY;

        if (x < 0 || x > window.innerWidth) directionX *= -1;
        if (y < 0 || y > window.innerHeight) directionY *= -1;

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        requestAnimationFrame(animate);
      }

      animate();
      dots.push(dot);
    }

    for (let i = 0; i < dotsCount; i++) {
      createDot();
    }

    return () => {
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return <div id="dots-container" className="dots-wrapper"></div>;
};

export default Ani;
