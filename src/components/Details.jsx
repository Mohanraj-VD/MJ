import { motion } from "framer-motion";
import { Card, CardContent, Typography, Grid, Box, Divider } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Details() {
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <Box component="section" className="details" sx={{ 
            py: { xs: 8, md: 12 }, 
            px: { xs: 4, md: 6 },
            position: "relative",
            overflow: "hidden"
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}>
                    <Typography variant="h2" sx={{ 
                        fontFamily: "'Pinyon Script', cursive", 
                        color: "var(--primary-color)",
                        fontSize: { xs: "3.5rem", md: "5rem" },
                        mb: { xs: 1, md: 2 },
                        textShadow: "2px 2px 4px rgba(0,0,0,0.05)"
                    }}>
                        The Celebration
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ height: '1px', width: '40px', bgcolor: 'var(--secondary-color)', opacity: 0.5 }} />
                        <Typography variant="subtitle1" sx={{ 
                            fontFamily: "'Playfair Display', serif",
                            color: "var(--secondary-color)",
                            letterSpacing: 4,
                            textTransform: "uppercase",
                            fontWeight: 600,
                            fontSize: { xs: "0.8rem", md: "1rem" }
                        }}>
                            Join us in making memories
                        </Typography>
                        <Box sx={{ height: '1px', width: '40px', bgcolor: 'var(--secondary-color)', opacity: 0.5 }} />
                    </Box>
                </Box>
            </motion.div>

            <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center" alignItems="stretch" sx={{ position: "relative", zIndex: 1, maxWidth: "1200px", mx: "auto" }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={variants}
                        style={{ width: '100%' }}
                    >
                        <Box className="event-card" sx={{
                            height: '100%',
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(121, 163, 125, 0.2)",
                            borderRadius: "16px",
                            padding: "40px 40px",
                            textAlign: "center",
                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            "&:hover": {
                                transform: "translateY(-15px)",
                                boxShadow: "0 20px 40px rgba(44, 74, 59, 0.08)",
                                borderColor: "var(--secondary-color)"
                            }
                        }}>
                            <Box sx={{ 
                                width: '80px', height: '80px', 
                                margin: '0 auto 20px', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(121, 163, 125, 0.1) 0%, transparent 100%)',
                                border: '1px solid rgba(121, 163, 125, 0.3)'
                            }}>
                                <CelebrationIcon sx={{ fontSize: 40, color: "var(--tertiary-color)" }} />
                            </Box>
                            <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", color: "var(--primary-color)", mb: 2, fontSize: "2rem", fontWeight: 700 }}>
                                Reception
                            </Typography>
                            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "var(--secondary-color)", mb: 1, letterSpacing: 1 }}>
                                Saturday, September 12th, 2026
                            </Typography>
                            <Box sx={{ width: '30px', height: '2px', bgcolor: 'var(--primary-color)', opacity: 0.2, mx: 'auto', my: 2 }} />
                            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#666", mb: 3, textTransform: "uppercase", letterSpacing: 2 }}>
                                6:00 PM Onwards
                            </Typography>
                            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "var(--text-color)", fontStyle: "italic", lineHeight: 1.6 }}>
                                Join us for an evening of warmth, laughter, and a delightful feast as we celebrate our new beginning together with family and friends.
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                        }}
                        style={{ width: '100%' }}
                    >
                        <Box className="event-card" sx={{
                            height: '100%',
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(121, 163, 125, 0.2)",
                            borderRadius: "16px",
                            padding: "40px 40px",
                            textAlign: "center",
                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            "&:hover": {
                                transform: "translateY(-15px)",
                                boxShadow: "0 20px 40px rgba(44, 74, 59, 0.08)",
                                borderColor: "var(--secondary-color)"
                            }
                        }}>
                            <Box sx={{ 
                                width: '80px', height: '80px', 
                                margin: '0 auto 10px', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(121, 163, 125, 0.1) 0%, transparent 100%)',
                                border: '1px solid rgba(121, 163, 125, 0.3)'
                            }}>
                                <FavoriteIcon sx={{ fontSize: 40, color: "var(--tertiary-color)" }} />
                            </Box>
                            <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", color: "var(--primary-color)", mb: 2, fontSize: "2rem", fontWeight: 700 }}>
                                Muhurtham
                            </Typography>
                            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "var(--secondary-color)", mb: 1, letterSpacing: 1 }}>
                                Sunday, September 13th, 2026
                            </Typography>
                            <Box sx={{ width: '30px', height: '2px', bgcolor: 'var(--primary-color)', opacity: 0.2, mx: 'auto', my: 2 }} />
                            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#666", mb: 3, textTransform: "uppercase", letterSpacing: 2 }}>
                                4:30 AM - 6:00 AM
                            </Typography>
                            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "var(--text-color)", fontStyle: "italic", lineHeight: 1.6 }}>
                                The sacred moment where two hearts become one. We seek your blessings 
                                and love as we take our vows in the presence of the divine.
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Details;