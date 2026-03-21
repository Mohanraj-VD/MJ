import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Countdown() {
    const weddingDate = new Date("2026-09-13T06:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isExpired, setIsExpired] = useState(false);

    function calculateTimeLeft() {
        const difference = weddingDate - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return null;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            if (timeLeft) {
                setTimeLeft(timeLeft);
            } else {
                setIsExpired(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (isExpired) {
        return null;
    }

    const timeUnits = [
        { label: "Days", value: timeLeft?.days },
        { label: "Hours", value: timeLeft?.hours },
        { label: "Minutes", value: timeLeft?.minutes },
        { label: "Seconds", value: timeLeft?.seconds }
    ];

    return (
        <section className="countdown">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h3" sx={{ 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--primary-color)", 
                    mb: 6,
                    fontWeight: 700,
                    textAlign: "center",
                    letterSpacing: "1px"
                }}>
                    Countdown to Our Big Day
                </Typography>
                
                <div className="timer">
                    {timeUnits.map((unit, index) => (
                        <motion.div 
                            className="time-box" 
                            key={index}
                            whileHover={{ scale: 1.1, borderColor: "var(--secondary-color)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="value">{unit.value || 0}</span>
                            <span className="label">{unit.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Countdown;