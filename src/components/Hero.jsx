import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import AnimatedText from "./AnimatedText";

function Hero() {
    return (
        <Box component="section" className="hero" sx={{ 
            pt: { xs: 6, md: 8 },
            pb: { xs: 6, md: 8 },
            px: { xs: 0, sm: 2, md: 4 }, // Removed padding left and right completely on smallest screens
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
            width: "100%",
            boxSizing: "border-box"
        }}>
            <Box className="hero-content" sx={{ 
                width: "100%", 
                maxWidth: "1000px", 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }}>
                <motion.div
                    className="invitation-tag"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Uniting Two Hearts
                </motion.div>

                <motion.div
                    className="couple-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    style={{ width: "100%", margin: "0 auto 40px" }}
                >
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        gap: { xs: 3, md: 4 },
                        width: '100%' 
                    }}>
                        {/* Groom Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div className="name-line">
                                <span className="name-decoration" style={{ display: 'none' }}></span>
                                <Typography variant="h1" className="hero-title" sx={{ 
                                    fontSize: { xs: "3.8rem", sm: "4.5rem", md: "5.5rem" },
                                    fontFamily: "var(--font-accent)",
                                    color: "var(--primary-color)",
                                    m: 0,
                                    lineHeight: 1.2,
                                    px: 0, // removed padding
                                    wordBreak: 'break-word',
                                    whiteSpace: 'normal'
                                }}>
                                    <AnimatedText text="V. Mohanraj" />
                                </Typography>
                                <span className="name-decoration" style={{ display: 'none' }}></span>
                            </div>
                            <Typography variant="body2" sx={{ 
                                fontFamily: "'Montserrat', sans-serif", 
                                color: "var(--text-color)", 
                                mt: { xs: 1, md: 2 },
                                letterSpacing: { xs: 0.5, sm: 2 },
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                fontStyle: "italic",
                                opacity: 0.9,
                                textAlign: 'center',
                                maxWidth: '100%',
                                px: 1,
                                mx: "auto"
                            }}>
                                Son of Mr. S. Vellingiri & Mrs. V. Dhanabagiyam
                            </Typography>
                        </Box>
                        
                        <div className="ampersand-container" style={{ margin: "5px 0" }}>
                            <span className="ampersand" style={{ fontSize: "3rem" }}>&</span>
                        </div>
                        
                        {/* Bride Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div className="name-line">
                                <span className="name-decoration" style={{ display: 'none' }}></span>
                                <Typography variant="h1" className="hero-title" sx={{ 
                                    fontSize: { xs: "3.2rem", sm: "4.5rem", md: "5.5rem" },
                                    fontFamily: "var(--font-accent)",
                                    color: "var(--primary-color)",
                                    m: 0,
                                    lineHeight: 1.2,
                                    px: 0, // removed padding
                                    wordBreak: 'break-word',
                                    whiteSpace: 'normal'
                                }}>
                                    <AnimatedText text="T. Janaki Priya" />
                                </Typography>
                                <span className="name-decoration" style={{ display: 'none' }}></span>
                            </div>
                            <Typography variant="body2" sx={{ 
                                fontFamily: "'Montserrat', sans-serif", 
                                color: "var(--text-color)", 
                                mt: { xs: 1, md: 2 },
                                letterSpacing: { xs: 0.5, sm: 2 },
                                fontSize: { xs: "0.75rem", sm: "0.9rem" },
                                fontStyle: "italic",
                                opacity: 0.8,
                                textAlign: 'center',
                                maxWidth: '100%',
                                px: 1,
                                mx: "auto"
                            }}>
                                Daughter of Mr. G. Thiruselvam & Mrs. T. Subbulakshmi
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                <motion.div
                    className="invitation-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ 
                        marginTop: "20px", 
                        marginBottom: "40px",
                        padding: "10 10px",
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-heading)",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        maxWidth: "600px",
                        mx: "auto"
                    }}>
                        We invite you to share in our joy as we begin our new life together.
                    </Typography>
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
            </Box>
        </Box>
    );
}

export default Hero;