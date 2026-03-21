import { motion } from "framer-motion";

const DoubleHearts = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '60px 0',
                position: 'relative'
            }}
        >
            <motion.div
                animate={{ 
                    scale: [1, 1.1, 1],
                    filter: [
                        'drop-shadow(0 0 10px rgba(200, 80, 80, 0.4))', 
                        'drop-shadow(0 0 20px rgba(200, 80, 80, 0.8))', 
                        'drop-shadow(0 0 10px rgba(200, 80, 80, 0.4))'
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Left Heart */}
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{ 
                        position: 'absolute', 
                        left: '5px',
                        top: '15px',
                        transform: 'rotate(-15deg)',
                        color: 'rgba(200, 80, 80, 0.8)' 
                    }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>

                {/* Right Heart (Slightly larger and overlapping) */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{ 
                        position: 'absolute', 
                        right: '0px',
                        top: '5px',
                        transform: 'rotate(10deg)',
                        color: 'rgba(200, 80, 80, 0.95)' 
                    }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default DoubleHearts;