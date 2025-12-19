
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const ContainerScroll: React.FC<{
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized spring config for smoother performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.01
  });

  // Auf Mobile verzichten wir komplett auf X-Rotation, um das "Rausragen" aus dem Viewport zu verhindern
  const rotateX = useTransform(smoothProgress, [0, 0.3], isMobile ? [0, 0] : [10, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.3], isMobile ? [0, 0] : [-8, 0]);
  const scale = useTransform(smoothProgress, [0, 0.3], isMobile ? [0.85, 0.92] : [1.05, 1]);
  const translateY = useTransform(smoothProgress, [0, 0.3], isMobile ? [0, 0] : [20, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.1], [1, 1]);

  return (
    <div
      className="min-h-[95vh] lg:min-h-[100vh] flex items-start justify-center relative bg-brand-cream overflow-visible"
      ref={containerRef}
    >
      <div className="sticky top-0 min-h-[95dvh] lg:min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Canvas */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-cream via-transparent to-brand-cream"></div>
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-[0.9fr_1.1fr] items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 relative z-10 pt-32 sm:pt-36 md:pt-32 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-0">
          
          {/* CONTENT LINKS */}
          <motion.div 
            style={{ opacity }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full order-1 lg:order-1"
          >
            {titleComponent}
          </motion.div>

          {/* DASHBOARD RECHTS */}
          <div className="relative w-full order-2 lg:order-2 flex items-center justify-center perspective-[2500px]"
               style={{ height: 'clamp(260px, 45vw, 620px)' }}>
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale,
                y: translateY,
                transformStyle: "preserve-3d",
              }}
              className="w-full h-full border border-slate-200 bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] relative group overflow-hidden shadow-2xl will-change-transform transform-gpu"
            >
              <div className="h-full w-full overflow-hidden bg-[#fafbfc]">
                {children}
              </div>
            </motion.div>
            
            {/* Soft Glow Ambient - Reduced blur for performance */}
            <div className="absolute -inset-10 bg-brand-orange/[0.03] blur-3xl rounded-full -z-10 pointer-events-none opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
