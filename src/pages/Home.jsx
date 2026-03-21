import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Countdown from "../components/Countdown";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import FloatingOrbs from "../components/FloatingOrbs";
import Gallery from "../components/Gallery";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function Home() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ position: "relative", overflow: "hidden" }}
        >
            <FloatingOrbs />
            <div className="wedding-card">
                <Hero />
                <Divider />
                <Countdown />
                <Divider />
                <Details />
                <Divider />
                <Gallery />
                <Divider />
                <Venue />
                <Footer />
            </div>
        </motion.div>
    );
}

export default Home;