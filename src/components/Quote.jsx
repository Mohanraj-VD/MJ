import { motion } from "framer-motion";

const Quote = () => {
    return (
        <section className="quote-section" style={{ padding: "20px 20px", textAlign: "center" }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <p style={{ 
                    fontFamily: "var(--font-accent)", 
                    fontSize: "3rem", 
                    color: "var(--secondary-color)",
                    marginBottom: "15px",
                    lineHeight: "1.4"
                }}>
                    "Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
                </p>
            </motion.div>
        </section>
    );
};

export default Quote;
