import { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const bounds = useRef({ top: 0, bottom: 0 });
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);

  // Update image position on scroll
  useLenis(({ scroll }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2; // Adjust factor for parallax strength
  });

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    // Initialize
    updateBounds();
    window.addEventListener("resize", updateBounds);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateBounds);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
      }}
    />
  );
};

export default ParallaxImage;
