import React from "react";
import Title from "../title/Title";
import w1 from "../../assets/w1.webp";
import w2 from "../../assets/w2.webp";
import { motion } from "motion/react";
const work = () => {
  return (
    <section id="work" className="pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            heading="work."
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
                tristique quam felis. Id phasellus dui orci vulputate consequat nulla
                proin. Id sit scelerisque neque, proin bibendum diam."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* single card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay:.3 }}
            className="card rounded-none"
          >
            <figure>
              <img src={w1} className="h-[300px]" alt="work image" />
            </figure>
            <div className="card-body">
              <span className=" text-sm italic">November 24, 2019</span>
              <a href="#">
                <h2 className="card-title text-xl text-darkblue">
                  Some Case Study
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
                convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
              </p>
            </div>
          </motion.div>
          {/* single card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 ,delay:.5}}
            className="card rounded-none"
          >
            <figure>
              <img src={w2} className="h-[300px]" alt="work image" />
            </figure>
            <div className="card-body">
              <span className=" text-sm italic">November 24, 2019</span>
              <a href="#">
                <h2 className="card-title text-xl text-darkblue">
                  Some Case Study
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
                convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
              </p>
            </div>
          </motion.div>
          {/* single card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 ,delay:.7}}
            className="card rounded-none"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                className="h-[300px]"
                alt="work image"
              />
            </figure>
            <div className="card-body">
              <span className=" text-sm italic">November 24, 2019</span>
              <a href="#">
                <h2 className="card-title text-xl text-darkblue">
                  Some Case Study
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
                convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default work;
