import Link from "next/link";
import React from "react";

const ToolCard = ({ tool }) => {
  return (
    <Link href={tool?.underDev ? "/tools" : tool?.route}>
      <a>
        <div className="relative h-full bg-gray-100/60 dark:bg-dark-500 p-4 w-full rounded-lg border dark:border-none ">
          {tool?.underDev && (
            <span className="absolute top-2 right-0 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
              Under Development
            </span>
          )}

          <div className="flex justify-center aspect-square h-12 text-primary-600 items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-dark-900 dark:text-primary-500">
            {tool?.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            {tool?.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-200">
            {tool?.description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ToolCard;
