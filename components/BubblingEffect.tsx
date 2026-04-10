'use client';

import { useEffect, useRef } from 'react';

export default function BubblingEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Bubble {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      column: number;
    }

    // Create bubble columns for that bioreactor look
    const numColumns = 12;
    const bubbles: Bubble[] = [];

    // Initialize bubbles in columns
    const createBubbles = () => {
      const columnWidth = canvas.width / numColumns;
      for (let col = 0; col < numColumns; col++) {
        // Central column is denser (main bioreactor effect)
        const isCentral = col >= 4 && col <= 7;
        const bubbleCount = isCentral ? 40 : 20;
        
        for (let i = 0; i < bubbleCount; i++) {
          const xBase = col * columnWidth + columnWidth / 2;
          const xSpread = isCentral ? 40 : 60; // Tighter in center
          
          bubbles.push({
            x: xBase + (Math.random() - 0.5) * xSpread,
            y: canvas.height + Math.random() * 200,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            column: col,
          });
        }
      }
    };

    createBubbles();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 1)'; // Dark charcoal background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw glow effect (bioluminescent haze)
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height * 0.6,
        0,
        canvas.width / 2,
        canvas.height * 0.6,
        canvas.width * 0.6
      );
      gradient.addColorStop(0, 'rgba(0, 200, 220, 0.15)'); // Cyan glow
      gradient.addColorStop(0.5, 'rgba(0, 150, 180, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        // Move bubble up
        bubble.y -= bubble.speed;
        
        // Wobble effect
        bubble.x += Math.sin(bubble.y * 0.01) * 0.3;

        // Reset if off screen
        if (bubble.y < -10) {
          bubble.y = canvas.height + Math.random() * 100;
          const columnWidth = canvas.width / numColumns;
          const xBase = bubble.column * columnWidth + columnWidth / 2;
          const isCentral = bubble.column >= 4 && bubble.column <= 7;
          const xSpread = isCentral ? 40 : 60;
          bubble.x = xBase + (Math.random() - 0.5) * xSpread;
        }

        // Draw bubble with glow
        const alpha = bubble.opacity * (1 - (bubble.y / canvas.height) * 0.3);
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.radius * 4
        );
        glowGradient.addColorStop(0, `rgba(0, 220, 255, ${alpha * 0.5})`);
        glowGradient.addColorStop(1, 'rgba(0, 220, 255, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core bubble
        ctx.fillStyle = `rgba(150, 230, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(bubble.x - bubble.radius * 0.3, bubble.y - bubble.radius * 0.3, bubble.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
