import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
      style={{
        background: "radial-gradient(circle, purple, transparent)",
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  );
}

export default CursorGlow;