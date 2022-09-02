import React from "react";

import { faqData } from "../constansts/faqData";
import AccordionCard from "./AccordionCard";

const Accodion = () => {
  return (
    <div className="w-full p-3 max-w-7xl mx-auto">
      <div className="py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md px-3 mb-4 md:mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-200">
            The purpose of this FAQ is generally to provide information on
            frequent questions or concerns about Tadashi downloader. In case you
            can&apos;t find the answer for your question, feel free to ask
            trough email our contact page.
          </p>
        </div>
        <div className="my-2 md:my-12">
          {faqData?.map((item, index) => (
            <AccordionCard
              key={index}
              first={index === 0}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accodion;
