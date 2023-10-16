import React from "react";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import ContactUsPagePGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../shared/HText";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactPage = ({ setSelectedPage }: Props) => {

  const inputStyles = `" mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"`

  const {
register,
    trigger,
    formState: { errors }
  } = useForm();


  const onSubmit = async (e: any) => {
    const isValid = await trigger();
   if (!isValid){
      e.preventDefault();
    }
  };

  return (
    <section id="contactuse" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:e-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quia
            aliquid quaerat, porro sapiente alias perferendis, fugiat deleniti
            culpa sed, assumenda temporibus quos aut voluptatem molestiae
            consequuntur aperiam consectetur incidunt?
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form action="https://formsubmit.co/todaynow76@gmail.com" target="_blank" method="POST" onSubmit={onSubmit}>
             
             {/* name */}
              <input type="text"
              className={inputStyles}
              placeholder="NAME"
              {...register("name", {
                required:true,
                maxLength:100,
              })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 ">
                  {errors.name.type === "required" && "This field is required.!!"},
                  {errors.name.type === "maxLength" && "Max lenght is 100 character"}
                </p>
              )}

{/* email */}

  
<input type="email"
              className={inputStyles}
              placeholder="EMAIL"
              {...register("name", {
                required:true,
                pattern: /^[A-Z0-9._%]+@[A-z0-9.-]+\.[A-Z]{2,}$/i
              })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500 ">
                  {errors.email.type === "required" && "This field is required.!!"},
                  {errors.email.type === "pattern" && "Invalid email adress!"}
                </p>
              )}


  {/* Message */}
<textarea 
rows={4}
cols={50}
              className={inputStyles}
              placeholder="Message"
              {...register("message", {
                required:true,
                maxLength:2000,
              })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 ">
                  {errors.message.type === "required" && "This field is required.!!"},
                  {errors.message.type === "maxLength" && "Max lenght is 2000 character"}
                </p>
              )}
  <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3  transition-500 hover:text-white">
    Submit
  </button>
            </form>
          </motion.div>
          <motion.div className="relative mt-16 basis-2/5 md:mt-0"
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
  <div  className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
    <img  src={ContactUsPagePGraphic} alt="ContactUsPageGraphic"  className="w-full" />
  </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
