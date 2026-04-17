import { motion } from "framer-motion";
import Heart from "./Heart";
import { Typography, Box } from "@mui/material";

// A component for floating background hearts (mild red only, reduced count)
const FloatingBackgroundHeart = ({ size, position, duration, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.6 }}
        whileInView={{ opacity: [0, 0.12, 0], y: -100, scale: 1 }}
        viewport={{ once: false }}
        transition={{ 
            duration: duration, 
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
        }}
        style={{
            position: 'absolute',
            color: 'rgba(200,80,80,0.5)', /* mild red */
            fontSize: size,
            zIndex: 0,
            pointerEvents: 'none',
            ...position
        }}
    >
        ❤
    </motion.div>
);

function Footer() {
    return (
        <Box component="footer" className="footer" sx={{
            position: 'relative',
            mt: 10,
            pt: 12,
            pb: 6,
            px: { xs: 2, md: 4 },
            background: 'var(--bg-color)',
            borderTop: '1px solid rgba(121, 163, 125, 0.2)', // Green secondary-color tint
            overflow: 'hidden',
            color: 'var(--text-color)',
            boxShadow: 'none'
        }}>
            
            {/* Floating Background Hearts (reduced and mild red only) */}
            <FloatingBackgroundHeart size="2rem" position={{ left: "12%", bottom: "22%" }} duration={6} delay={0} />
            <FloatingBackgroundHeart size="3rem" position={{ left: "28%", bottom: "12%" }} duration={8} delay={1} />
            <FloatingBackgroundHeart size="1.5rem" position={{ right: "22%", bottom: "18%" }} duration={5} delay={2.5} />

            <Box sx={{ 
                position: 'relative', 
                zIndex: 2, 
                // maxWidth: '1200px',
                margin: '10 10',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center'
            }}>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" sx={{ 
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: { xs: "2rem", md: "4rem" },
                        color: "var(--primary-color)",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // flexWrap: "wrap",
                        gap: "5px"
                    }}>
                        <span>V. Mohanraj</span> <Heart/><span>T. Janaki Priya</span>
                    </Typography>

                    <Typography variant="body1" sx={{ 
                        fontFamily: "'Cormorant Garamond', serif", 
                        fontSize: { xs: "1.2rem", md: "1.5rem" }, 
                        fontStyle: "italic",
                        color: "var(--text-color)",
                        mb: 2,
                        opacity: 0.9,
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.6
                    }}>
                        Your love and support mean the world to us. <br />
                        Join us as we celebrate the beginning of a beautiful journey together. <br />
                        Save the date and celebrate with us!
                    </Typography>
                </motion.div>

                {/* Elegant Minimal Divider */}
                <Box sx={{ 
                    width: '60px', 
                    height: '1px', 
                    bgcolor: 'var(--secondary-color)', 
                    opacity: 0.5, 
                    my: 6 
                }} />

                <Typography variant="caption" sx={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    color: "var(--text-color)",
                    opacity: 0.6,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                    mt: 2
                }}>
                    © {new Date().getFullYear()} M & J. Designed with Love.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;