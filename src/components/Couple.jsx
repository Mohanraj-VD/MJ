import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import AnimatedText from "./AnimatedText";

function Couple() {
    return (
        <section className="couple-section" style={{ padding: "40px 0" }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" sx={{ 
                    fontFamily: "'Pinyon Script', cursive", 
                    color: "var(--primary-color)",
                    textAlign: "center",
                    mb: 6,
                    fontSize: { xs: "3rem", md: "4.5rem" }
                }}>
                    Happy Couple
                </Typography>

                <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2 }}>
                    <Grid container spacing={{ xs: 6, md: 4 }} justifyContent="center" alignItems="center">
                        {/* Groom */}
                        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Box sx={{ 
                                            width: 120, 
                                            height: 120, 
                                            borderRadius: "50%", 
                                            border: "1px solid var(--secondary-color)",
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                            background: "#fff",
                                            boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                                        }}>
                                            <MaleIcon sx={{ fontSize: 60, color: "var(--primary-color)" }} />
                                        </Box>
                                    </motion.div>
                                    <Typography variant="h4" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        fontWeight: 700, 
                                        color: "var(--primary-color)",
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        mb: 1
                                    }}>
                                        <AnimatedText text="Mohanraj" />
                                    </Typography>
                                    <Typography variant="body1" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        color: "var(--text-color)", 
                                        fontSize: "1.1rem", 
                                        fontStyle: "italic",
                                        maxWidth: "300px",
                                        mx: "auto"
                                    }}>
                                        "I have found the one whom my soul loves."
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Divider */}
                        <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Typography variant="h3" sx={{ 
                                    fontFamily: "'Pinyon Script', cursive", 
                                    color: "var(--secondary-color)",
                                    fontSize: "3rem"
                                }}>
                                    &
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Bride */}
                        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Box sx={{ 
                                            width: 120, 
                                            height: 120, 
                                            borderRadius: "50%", 
                                            border: "1px solid var(--secondary-color)",
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                            background: "#fff",
                                            boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                                        }}>
                                            <FemaleIcon sx={{ fontSize: 60, color: "var(--primary-color)" }} />
                                        </Box>
                                    </motion.div>
                                    <Typography variant="h4" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        fontWeight: 700, 
                                        color: "var(--primary-color)",
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        mb: 1
                                    }}>
                                        <AnimatedText text="Janaki Priya" />
                                    </Typography>
                                    <Typography variant="body1" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        color: "var(--text-color)", 
                                        fontSize: "1.1rem", 
                                        fontStyle: "italic",
                                        maxWidth: "300px",
                                        mx: "auto"
                                    }}>
                                        "Love is looking in the same direction."
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>
            </motion.div>
        </section>
    );
}

export default Couple;
