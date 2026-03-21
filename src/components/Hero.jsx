import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import AnimatedText from "./AnimatedText";

function Hero() {
    return (
        <section className="hero" style={{ paddingTop: "120px" }}>
            <div className="hero-content">
                <motion.div
                    className="invitation-tag"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Wedding Invitation
                </motion.div>

                <motion.div
                    className="couple-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    <div className="name-wrapper" style={{ gap: "30px" }}>
                        {/* Groom Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="name-line">
                                <span className="name-decoration"></span>
                                <h1 className="hero-title" style={{ fontSize: "4rem" }}>
                                    <AnimatedText text="V. Mohanraj" />
                                </h1>
                                <span className="name-decoration"></span>
                            </div>
                            <Typography variant="body2" sx={{ 
                                fontFamily: "'Montserrat', sans-serif", 
                                color: "var(--text-color)", 
                                mt: 1,
                                letterSpacing: 1,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                                opacity: 0.8
                            }}>
                                Son of Mr. S. Vellingiri & Mrs. V. Dhanabagiyam
                            </Typography>
                        </Box>
                        
                        <div className="ampersand-container" style={{ margin: "10px 0" }}>
                            <span className="ampersand" style={{ fontSize: "3.5rem" }}>&</span>
                        </div>
                        
                        {/* Bride Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="name-line">
                                <span className="name-decoration"></span>
                                <h1 className="hero-title" style={{ fontSize: "4rem" }}>
                                    <AnimatedText text="T. Janaki Priya" />
                                </h1>
                                <span className="name-decoration"></span>
                            </div>
                            <Typography variant="body2" sx={{ 
                                fontFamily: "'Montserrat', sans-serif", 
                                color: "var(--text-color)", 
                                mt: 1,
                                letterSpacing: 1,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                                opacity: 0.8
                            }}>
                                Daughter of Mr. Thiruselvam & Mrs. T. Subbulakshmi
                            </Typography>
                        </Box>
                    </div>
                </motion.div>

                <motion.div
                    className="invitation-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ marginTop: "40px" }}
                >
                    We invite you to share in our joy as we begin our new life together.
                </motion.div>

                <motion.div
                    className="date-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                >
                    <div className="date-box">
                        <div className="date-value">12 . 09 . 2026</div>
                        <div className="date-location">Tiruppur</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;