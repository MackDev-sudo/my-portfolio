import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const numStars = 200;
    const maxStarSize = 2;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxStarSize,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        // Move star
        star.x -= star.speed;

        // Reset star position when it goes off screen
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Draw star
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 2
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: "linear-gradient(to bottom, #0f172a, #1e293b)" }}
    />
  );
};

export default StarryBackground;
