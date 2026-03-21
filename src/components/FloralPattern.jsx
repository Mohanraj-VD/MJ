import { motion } from "framer-motion";

// An elegant, minimalist, and "colorless" (monochrome/subtle) floral design
const FloralPattern = ({ position, rotation = 0, scale = 1, opacity = 0.15 }) => {
    const styles = {
        position: "absolute",
        width: "300px",
        height: "300px",
        zIndex: 0,
        pointerEvents: "none",
        ...position
    };

    return (
        <motion.div
            style={styles}
            initial={{ opacity: 0, rotate: rotation - 15, scale: scale * 0.8 }}
            whileInView={{ opacity: opacity, rotate: rotation, scale: scale }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <svg viewBox="0 0 200 200" width="100%" height="100%">
                <g stroke="var(--primary-color)" strokeWidth="0.5" fill="none">
                    {/* Delicate vines */}
                    <path d="M100,200 Q120,150 150,100 T180,20" strokeDasharray="4 2" />
                    <path d="M100,200 Q80,140 50,90 T20,30" strokeDasharray="2 4" />
                    
                    {/* Subtle leaves attached to vines */}
                    <path d="M125,140 C140,130 150,145 125,140" fill="var(--primary-color)" fillOpacity="0.05" />
                    <path d="M150,100 C170,90 180,110 150,100" fill="var(--primary-color)" fillOpacity="0.05" />
                    <path d="M165,60 C185,45 195,70 165,60" fill="var(--primary-color)" fillOpacity="0.05" />

                    <path d="M75,140 C60,130 50,145 75,140" fill="var(--primary-color)" fillOpacity="0.05" />
                    <path d="M50,90 C30,80 20,100 50,90" fill="var(--primary-color)" fillOpacity="0.05" />
                    <path d="M35,50 C15,35 5,60 35,50" fill="var(--primary-color)" fillOpacity="0.05" />

                    {/* Central elegant abstract flower */}
                    <g transform="translate(100, 180) scale(0.8)">
                        <path d="M0,0 C30,-30 40,-10 0,-60 C-40,-10 -30,-30 0,0" fill="var(--primary-color)" fillOpacity="0.08" strokeWidth="0.5"/>
                        <path d="M0,0 C20,-20 30,-5 0,-40 C-30,-5 -20,-20 0,0" fill="var(--primary-color)" fillOpacity="0.1" strokeWidth="0.5"/>
                        <circle cx="0" cy="-10" r="3" fill="var(--primary-color)" fillOpacity="0.3" stroke="none" />
                        <circle cx="-5" cy="-20" r="1.5" fill="var(--primary-color)" fillOpacity="0.2" stroke="none" />
                        <circle cx="5" cy="-20" r="1.5" fill="var(--primary-color)" fillOpacity="0.2" stroke="none" />
                    </g>
                </g>
            </svg>
        </motion.div>
    );
};

export default FloralPattern;