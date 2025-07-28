import { motion } from "framer-motion";
// import { resume } from '../assets/index'

const ResumeButton = () => {
  const handleDownload = () => {
    const fileUrl = resume;
    const fileName = "Hrigved-Rajiv-Khatavkar";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#915EFF] text-white font-bold py-2 px-4 rounded"
      onClick={handleDownload}
    >
      Download Resume
    </motion.button>
  );
};

export default ResumeButton;
