import { motion } from "framer-motion";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ResumeButton from "./ResumeButton";
import LinkedIn from "./LinkedIn";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hrigved</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer, <br className="sm:block hidden" />
            and a Full Stack Developer with a passion to solve problems in a pixelly perfect way.
          </p>

          <div className="flex gap-4 mt-8">
            <ResumeButton />
            <LinkedIn />
          </div>

          <div className="mt-19">
            <img
              src={logo}
              alt="Logo"
              className="w-80 h-80 rounded-full border-4 border-secondary p-4 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;