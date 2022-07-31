import { motion } from 'framer-motion';

export default function Experiences() {
    window.scrollTo(0, 0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pages-container experiences">
            <div className="pages-content">
                Tailored Experiences
            </div>
        </motion.div>
    )
}
