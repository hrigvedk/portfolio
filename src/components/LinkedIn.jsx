// LinkedInButton.jsx
import { motion } from "framer-motion";

const LinkedInButton = () => {
  const handleLinkedIn = () => {
    // Open your LinkedIn profile in a new tab
    const linkedInUrl = "https://www.linkedin.com/in/hrigved/";
    window.open(linkedInUrl, "_blank");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#915EFF] text-white font-bold py-2 px-4 rounded"
      onClick={handleLinkedIn}
    >
      Visit LinkedIn
    </motion.button>
  );
};

export default LinkedInButton;