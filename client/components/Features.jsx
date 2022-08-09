import React from "react";
import { toolsData } from "../constansts/tools";
import ToolCard from "./ToolCard";

const Features = () => {
  return (
    <section className="bg-white dark:bg-dark-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Features provided by Tadashi.
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-200">
            Here at Tadashi, we provide one of the best and easy way to download
            Instagram videos and photos is to use the tools we provide.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full gap-4">
          {toolsData.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
