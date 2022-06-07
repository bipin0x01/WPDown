import { Spinner } from "flowbite-react";
import React from "react";

export default function () {
  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <button
        disabled
        type="button"
        className=" border-gray-200 py-2.5 px-5 mr-2 text-md font-medium text-gray-200 bg-transparent rounded-lg border  hover:bg-gray-200 hover:text-smooth-blue focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
      >
        <Spinner />
        <span className="ml-2">
          Reciting some magic spells from the book of devs!
        </span>
      </button>
    </div>
  );
}
