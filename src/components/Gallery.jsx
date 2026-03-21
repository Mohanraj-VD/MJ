import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function Gallery() {
    const meanings = [

        {
            title: "Our Journey Begins",
            description: "\"From two different paths, we now walk one journey.\n" +
                "With love as our guide and trust as our strength,\n" +
                "this is just the beginning of forever\"",
            icon: <FavoriteIcon sx={{ fontSize: 40, color: "var(--tertiary-color)" }} />
        },
        {
            title: "The Sacred Tie",
            description: "\"It is not just a knot, but a bond of three knots representing duty, love, and respect, binding two souls in eternal union.\"",
            icon: <AllInclusiveIcon sx={{ fontSize: 40, color: "var(--tertiary-color)" }} />
        },
        {
            title: "The Promise",
            description: "\"Holding hands, we promise to walk side by side, through all of life's seasons, sharing laughter, tears, and a lifetime of dreams.\"",
            icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: "var(--tertiary-color)" }} />
        }
    ];

    return (
        <Box component="section" className="meanings-section" sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" sx={{ 
                    fontFamily: "'Pinyon Script', cursive", 
                    color: "var(--primary-color)", 
                    textAlign: "center",
                    mb: { xs: 1, md: 2 },
                    fontSize: { xs: "3rem", md: "4.5rem" }
                }}>
                    The Essence of Our Union
                </Typography>
                <Typography variant="subtitle1" sx={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    color: "var(--secondary-color)", 
                    textAlign: "center",
                    mb: { xs: 5, md: 8 },
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: { xs: "0.7rem", md: "0.9rem" }
                }}>
                    Rituals & Meanings
                </Typography>

                <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
                    {meanings.map((item, index) => (
                        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                style={{ width: '100%' }}
                                whileHover={{ y: -5 }}
                            >
                                <Box sx={{ 
                                    p: 4, 
                                    height: '100%',
                                    background: "#fff",
                                    border: "1px solid var(--accent-color)",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    transition: "all 0.3s ease",
                                    "&:hover": { 
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        borderColor: "var(--secondary-color)"
                                    }
                                }}>
                                    <Box sx={{ mb: 2 }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        fontWeight: 700,
                                        color: "var(--primary-color)",
                                    mb: { xs: 1.5, md: 2 },
                                    fontSize: { xs: "1.5rem", md: "1.8rem" }
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ 
                                        fontFamily: "'Cormorant Garamond', serif", 
                                        color: "var(--text-color)",
                                        lineHeight: 1.6,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontStyle: "italic"
                                    }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    );
}

export default Gallery;
