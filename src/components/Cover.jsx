import { motion } from "framer-motion";
import { Button, Box, Typography } from "@mui/material";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import FloatingOrbs from "./FloatingOrbs";

const PrayingCoupleBackground = () => (
    <motion.svg
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 0.15, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewBox="0 0 500 500"
        style={{
            position: 'absolute',
            width: '90vmin',
            height: '90vmin',
            zIndex: 1,
            pointerEvents: 'none',
            color: "var(--primary-color)",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
    >
        <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Top decorative arch / temple archway */}
            <path d="M50,400 L50,200 Q50,50 250,50 Q450,50 450,200 L450,400" strokeWidth="3" strokeDasharray="10 5" strokeOpacity="0.6" />
            <path d="M70,400 L70,200 Q70,70 250,70 Q430,70 430,200 L430,400" strokeWidth="1" strokeOpacity="0.4" />
            
            {/* Hanging bells/decorations from the arch */}
            <path d="M120,95 L120,130 M115,130 L125,130 L120,140 Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M380,95 L380,130 M375,130 L385,130 L380,140 Z" fill="currentColor" fillOpacity="0.3" />

            {/* Sacred fire / Agni Kundam in the center bottom */}
            <path d="M220,380 L280,380 L270,395 L230,395 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M235,380 Q250,340 265,380" fill="var(--secondary-color)" fillOpacity="0.5" stroke="none" />
            <path d="M245,380 Q250,350 255,380" fill="var(--primary-color)" fillOpacity="0.4" stroke="none" />
            
            {/* Base platform */}
            <line x1="100" y1="400" x2="400" y2="400" strokeWidth="3" />

            {/* ----- Groom Silhouette (Left, sitting and praying) ----- */}
            {/* Turban/Head */}
            <path d="M180,220 C160,210 190,195 200,220 Z" fill="currentColor" fillOpacity="0.2" />
            {/* Groom Profile */}
            <path d="M200,220 C210,230 205,245 195,250" />
            {/* Folded Hands (Anjali Mudra) */}
            <path d="M190,265 L220,290 L210,305 L180,280" fill="currentColor" fillOpacity="0.3" />
            {/* Body leaning forward in prayer */}
            <path d="M180,245 C150,280 140,350 150,395 L210,395 C200,340 180,300 190,265" />
            {/* Dhoti / lower garment drape */}
            <path d="M150,360 C120,380 130,400 150,395" />

            {/* ----- Bride Silhouette (Right, sitting and praying) ----- */}
            {/* Hair bun with Gajra (flowers) */}
            <circle cx="310" cy="215" r="15" fill="currentColor" fillOpacity="0.15" />
            <path d="M320,200 A 20 20 0 0 1 325,230" strokeDasharray="3 3" />
            {/* Bride Profile */}
            <path d="M290,220 C280,230 285,245 295,250" />
            {/* Folded Hands (Anjali Mudra) */}
            <path d="M300,265 L270,290 L280,305 L310,280" fill="currentColor" fillOpacity="0.3" />
            {/* Body leaning forward in prayer */}
            <path d="M310,245 C340,280 350,350 340,395 L280,395 C290,340 310,300 300,265" />
            {/* Saree drape/pallu over head/shoulder */}
            <path d="M315,205 C330,220 340,260 330,300" strokeOpacity="0.6" />
            <path d="M340,360 C370,380 360,400 340,395" />

            {/* Om / Auspicious symbol floating above them */}
            <g transform="translate(240, 120) scale(0.6)" fill="currentColor" stroke="none" opacity="0.3">
                <path d="M10,20 C10,5 30,5 30,20 C30,35 15,35 25,50 C35,65 10,65 10,50" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M30,35 C45,35 45,15 55,20" stroke="currentColor" strokeWidth="4" fill="none" />
                <circle cx="45" cy="5" r="3" />
                <path d="M35,10 C45,-5 55,10 45,10 Z" />
            </g>

            {/* Small glowing dust particles around the fire and hands */}
            <circle cx="250" cy="330" r="2" fill="var(--secondary-color)" stroke="none" />
            <circle cx="240" cy="310" r="1.5" fill="var(--secondary-color)" stroke="none" />
            <circle cx="260" cy="320" r="1" fill="var(--secondary-color)" stroke="none" />
            <circle cx="250" cy="290" r="2.5" fill="var(--secondary-color)" stroke="none" opacity="0.6"/>
        </g>
    </motion.svg>
);

const GlowingFlower = ({ position, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
            opacity: [0.2, 0.6, 0.2], // increased opacity for more glow
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
        }}
        transition={{ 
            duration: 8, 
            delay: delay, 
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{
            position: 'absolute',
            ...position,
            zIndex: 1,
            pointerEvents: 'none',
        }}
    >
        {/* Switched to a more flower-like design with a warm glow filter */}
        <svg width="60" height="60" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 15px var(--secondary-color))' }}>
            {/* Petals */}
            <path d="M50 50 Q60 10 90 30 T50 50 Z" fill="var(--secondary-color)" opacity="0.8" />
            <path d="M50 50 Q90 40 70 90 T50 50 Z" fill="var(--secondary-color)" opacity="0.8" />
            <path d="M50 50 Q40 90 10 70 T50 50 Z" fill="var(--secondary-color)" opacity="0.8" />
            <path d="M50 50 Q10 60 30 10 T50 50 Z" fill="var(--secondary-color)" opacity="0.8" />
            
            {/* Additional diagonal petals for a fuller flower */}
            <path d="M50 50 Q80 20 90 60 T50 50 Z" fill="var(--primary-color)" opacity="0.4" />
            <path d="M50 50 Q80 80 40 90 T50 50 Z" fill="var(--primary-color)" opacity="0.4" />
            <path d="M50 50 Q20 80 10 40 T50 50 Z" fill="var(--primary-color)" opacity="0.4" />
            <path d="M50 50 Q20 20 60 10 T50 50 Z" fill="var(--primary-color)" opacity="0.4" />

            <circle cx="50" cy="50" r="12" fill="#fff" opacity="0.9" />
            <circle cx="50" cy="50" r="6" fill="var(--accent-color)" />
        </svg>
    </motion.div>
);

function Cover({ onOpen }) {
    return (
        <motion.div 
            className="cover-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                background: "var(--bg-color)",
                overflow: "hidden"
            }}
        >
            {/* We've already set the hearts to be red in index.css, so FloatingOrbs renders them */}
            <Box sx={{ opacity: 0.5 }}>
                <FloatingOrbs />
            </Box>

            {/* Glowing Flowers Scattered Around - Adjusted positions for better framing */}
            <GlowingFlower position={{ top: "10%", left: "15%" }} delay={0} />
            <GlowingFlower position={{ top: "20%", right: "12%" }} delay={2} />
            <GlowingFlower position={{ bottom: "15%", left: "15%" }} delay={4} />
            <GlowingFlower position={{ bottom: "25%", right: "10%" }} delay={1} />
            <GlowingFlower position={{ top: "50%", left: "5%" }} delay={3} />
            <GlowingFlower position={{ top: "60%", right: "8%" }} delay={5} />

            {/* Traditional Praying Couple Background */}
            <PrayingCoupleBackground />

            {/* Main Content Box with Professional Styling */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                style={{ 
                    textAlign: "center", 
                    zIndex: 2,
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    padding: "40px 40px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 20px 40px rgba(44, 74, 59, 0.08)",
                    maxWidth: "90%",
                    width: "600px"
                }}
            >
                {/* Thin elegant top border */}
                <Box sx={{ width: '40px', height: '2px', bgcolor: 'var(--secondary-color)', mx: 'auto', mb: 4 }} />

                <motion.div
                //     animate={{
                //         scale: [1, 1.05, 1],
                //         opacity: [0.8, 1, 0.8]
                //     }}
                //     transition={{
                //         duration: 3,
                //         repeat: Infinity,
                //         ease: "easeInOut"
                //     }}
                // >
                    >
                    <Typography variant="subtitle1" sx={{
                        // fontFamily: "'Montserrat', sans-serif",
                        fontFamily: "Pinyon Script, cursive",
                        color: "var(--secondary-color)", 
                        letterSpacing: 8,
                        fontSize:'40px',
                        fontWeight: 1000,
                        display: 'block',
                        mb: 8
                    }}>
                        Wedding Invitation
                    </Typography>
                </motion.div>

                <Typography variant="h1" sx={{ 
                    fontFamily: "'Great Vibes', cursive", // Professional serif font instead of script
                    color: "var(--primary-color)",
                    fontSize: { xs: "3rem", md: "4.5rem" }, 
                    fontWeight: 600,
                    mb: 1,
                    lineHeight: 1.2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <span>V. Mohanraj</span>
                    <span style={{ 
                        fontFamily: "'Great Vibes', cursive", 
                        fontSize: '0.8em', 
                        color: 'var(--tertiary-color)',
                        margin: '10px 0'
                    }}>&</span>
                    <span>T. Janaki Priya</span>
                </Typography>

                <Typography variant="body1" sx={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    color: "var(--text-color)", 
                    fontSize: "0.9rem", 
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mb: 6,
                    mt: 4,
                    opacity: 0.8
                }}>
                    Request the honor of your presence
                </Typography>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button 
                        onClick={onOpen}
                        variant="outlined" 
                        endIcon={<DraftsOutlinedIcon sx={{ fontSize: 20 }}/>}
                        sx={{

                            borderColor: "rgba(255, 255, 255, 0.5)", 
                            color: "#F2EAE0",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            borderRadius: "50px",
                            padding: "12px 12px",
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            fontSize: "0.8rem",
                            transition: "all 0s ease",
                            background: "var(--secondary-color)",
                            backdropFilter: "blur(5px)",
                            borderWidth: "1px",
                            "&:hover": { 
                                borderColor: "var(--primary-color)",
                                backgroundColor: "var(--primary-color)",
                                color:"#F2EAE0",
                                transform: "translateY(-1px)",
                                boxShadow: "0 10px 20px rgba(44, 74, 59, 0.15)",
                                borderRadius:"50px"
                            }
                        }}
                    >
                        View Details
                    </Button>
                </motion.div>
                
                {/* Thin elegant bottom border */}
                <Box sx={{ width: '40px', height: '2px', bgcolor: 'var(--secondary-color)', mx: 'auto', mt: 3 }} />
            </motion.div>
        </motion.div>
    );
}

export default Cover;