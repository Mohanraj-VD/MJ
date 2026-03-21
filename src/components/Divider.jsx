import { motion } from "framer-motion";

const Divider = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "40px 0", alignItems: "center", gap: "10px" }}>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ height: "1px", width: "100px", background: "#d4af37" }}
            />
            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ color: "#d4af37", fontSize: "1.5rem" }}
            >
                ❦
            </motion.span>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ height: "1px", width: "100px", background: "#d4af37" }}
            />
        </div>
    );
};

export default Divider;
