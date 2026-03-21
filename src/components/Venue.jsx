import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Venue() {
    return (
        <section className="venue">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" sx={{ 
                    fontFamily: "'Pinyon Script', cursive", 
                    color: "var(--primary-color)", 
                    fontSize: { xs: "3rem", md: "4.5rem" }, 
                    mb: 2,
                    textAlign: "center"
                }}>
                    Venue Location
                </Typography>
                <Typography variant="subtitle1" sx={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    color: "var(--secondary-color)", 
                    letterSpacing: 3, 
                    textTransform: "uppercase", 
                    fontWeight: 600, 
                    mb: 1,
                    textAlign: "center",
                    display: "block",
                    fontSize: { xs: "0.7rem", md: "0.9rem" }
                }}>
                    We can't wait to celebrate with you!
                </Typography>
                
                <Typography variant="body1" sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--text-color)",
                    mb: 6,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: 600
                }}>
                    Sri Vanjiamman Thirumana Mahal<br/>
                    Mudhalipalayam Pirivu, Kangayam Rd, Tiruppur
                </Typography>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Box sx={{ 
                        maxWidth: "900px", 
                        margin: "0 auto", 
                        background: "#fff",
                        border: "1px solid var(--accent-color)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                    }}>
                        <Box sx={{ position: "relative", height: "400px" }}>
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8692759954477!2d77.3800624!3d11.1231649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9077227ba1b65%3A0xeabf803c4f74dcb5!2sSri%20Vanjiamman%20Thirumana%20Mahal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </Box>
                        <Box sx={{ textAlign: "center", p: 4, boxSizing: "border-box"  }}>
                            <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    variant="contained" 
                                    startIcon={<LocationOnIcon />}
                                    href="https://maps.app.goo.gl/t3dbT3jUjnT5owVKA" 
                                    target="_blank"
                                    sx={{ 
                                        backgroundColor: "#285A48",
                                        color: "#fff", 
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 600,
                                        borderRadius: "50px",
                                        padding: "10px 10px",
                                        letterSpacing: 1,
                                        textTransform: "uppercase",
                                        fontSize: "0.8rem",
                                        "&:hover": { backgroundColor: "#519A66" }
                                    }}
                                >
                                    Get Directions
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Venue;