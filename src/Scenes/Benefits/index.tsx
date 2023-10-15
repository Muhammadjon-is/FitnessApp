import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import BenefitItem from "./BenefitItem";
import ActionButton from "../shared/ActionButton";
import benfitPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities ",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti reiciendis, odit perspiciatis sequi accusantium",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes ",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti reiciendis, odit perspiciatis sequi accusantium",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers ",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti reiciendis, odit perspiciatis sequi accusantium",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultiimate fitness goals with ease. We provide true
            care into each and every member
          </p>
        </motion.div>
        {/* Benefit */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitItem
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphic adn Description */}

        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            src={benfitPageGraphic}
            alt="Benefit page Grpahic"
          />
          {/* Description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">
                < motion.div  
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.4, duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 },
                   }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT.</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.8, duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: 50 },
                 visible: { opacity: 1, x: 0 },
               }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                autem odio debitis, placeat officiis voluptatum nostrum quisquam
                quod voluptatibus. Reprehenderit dolor cumque ratione neque
                expedita blanditiis praesentium rerum doloremque voluptates!
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                inventore, iusto laborum quisquam quas consequuntur sapiente
                labore, sit quis similique, error ipsam exercitationem magnam.
                Quibusdam, officiis? Est quo eius enim!
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefit;