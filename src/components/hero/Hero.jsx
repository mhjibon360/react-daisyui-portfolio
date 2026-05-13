import React from "react";
import heroimage from "../../assets/hero.webp";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen w-full flex-col md:flex-row"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className=" flex flex-col gap-4 text-center  md:text-start"
          >
            <h4 className="capitalize text-xl">Hello, I’m John,</h4>
            <h1 className=" text-4xl md:text-6xl font-extrabold">
              Product <br /> Designer
            </h1>
            <p className="text-lg font-semibold">based in Netherland.</p>
            <div className="mt-7">
              <a href="" className="btn-yellow ">
                Resume
              </a>
            </div>
          </motion.div>
          {/* right */}
          <div className="text-center inline-flex justify-center">
            <Tilt>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className=" w-96 mt-10 md:mt-0"
              >
                <img src={heroimage} alt="" />
              </motion.div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
