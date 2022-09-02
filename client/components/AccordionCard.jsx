import { IoIosArrowDown as DownIcon } from "react-icons/io";
import { motion } from "framer-motion";
import { parent } from "../constansts/variants";
import { useState } from "react";

const AccordionCard = ({ first, title, description }) => {
  const [show, setShow] = useState(first || false);
  const toggle = () => setShow(!show);
  return (
    <>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-dark-100 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-100
            ${
              first
                ? "border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-dark-100 hover:bg-dark-100 dark:hover:bg-dark-900 bg-gray-100 dark:bg-dark-900"
                : ""
            }
            `}
          onClick={toggle}
        >
          <span>{title}</span>
          <DownIcon
            className={`w-6 h-6 shrink-0 transition-all ${
              show && "rotate-180"
            }`}
          />
        </button>
      </h2>
      {show && (
        <motion.div
          layout
          variants={parent}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="p-5 font-light border  border-gray-200 border-t-0 dark:border-dark-100"
        >
          {description}
        </motion.div>
      )}
    </>
  );
};

export default AccordionCard;
