import React from "react";
import Title from "../title/Title";
import contactiamge from "../../assets/contact.webp";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <section id="contact" className="contact pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Title heading="contact." desc="" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={contactiamge} className="w-full" alt="contact image" />
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-y-3"
          >
            <p className=" text-base font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>
            <ul className="list gap-4">
              <li className="list-row p-0">
                <a className=" text-lg" href="#" arial-label="gmail link">
                  johndoe@mail.com
                </a>
              </li>
              <li className="list-row p-0">
                <a className=" text-lg" href="#" arial-label="twitter link">
                  twitter.com/johndoe
                </a>
              </li>
              <li className="list-row p-0">
                <a className=" text-lg" href="#" arial-label="behance link">
                  behance.com/johndoe
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="join mt-3 focus:outline-0 focus:border-0">
                <div>
                  <label className="input validator join-item">
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      type="email"
                      placeholder="mail@site.com"
                      required
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>
                <button className="btn btn-neutral join-item font-medium">
                  Subscribe Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
