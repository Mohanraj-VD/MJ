import { motion } from "framer-motion";

const Heart = () => (
    <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 2,
        }}
        style={{ display: "inline-block" }}
    >
        💕
    </motion.span>
);

export default Heart;
