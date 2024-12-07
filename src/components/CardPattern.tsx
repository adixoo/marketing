import { useMotionTemplate, motion } from "framer-motion";

export function CardPattern({ mouseX, mouseY }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-teal-500 to-indigo-500 opacity-0 transition duration-300 group-hover:opacity-10"
        style={style}
      />
    </div>
  );
}
