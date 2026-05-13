import React from "react";
import Title from "../title/Title";
import { motion } from "motion/react";
const About = () => {
  return (
    <section className=" pb-24" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            className=" w-96 mt-10 md:mt-0"
            heading="about"
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam."
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-6">
          {/* single about */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex gap-3 flex-col w-full max-w-3xl mx-auto"
          >
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 bg-darkblue rounded-full"></div>
              <p className=" text-2xl font-semibold">2014-2018</p>
            </div>
            <p className=" text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>
          </motion.div>
          {/* single about */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex gap-3 flex-col w-full max-w-3xl mx-auto"
          >
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 bg-darkblue rounded-full"></div>
              <p className=" text-2xl font-semibold">2018-2020</p>
            </div>
            <p className=" text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>
          </motion.div>
          {/* single about */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex gap-3 flex-col w-full max-w-3xl mx-auto"
          >
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 bg-darkblue rounded-full"></div>
              <p className=" text-2xl font-semibold">2020 - Present</p>
            </div>
            <p className=" text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
