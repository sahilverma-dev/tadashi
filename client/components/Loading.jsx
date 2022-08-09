import React from "react";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-3 items-center justify-center ">
      <SpinnerIcon className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      <p className="font-bold">Loading . . . </p>
    </div>
  );
};

export default Loading;
