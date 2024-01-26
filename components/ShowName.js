"use client";
import { useState } from "react";

const ShowName = () => {
  const [name, setName] = useState("user");

  return (
    <>
      <div>the name is {name}</div>

      <div>
        <button
          onClick={() => setName("Faizan")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Change name to Faizan
        </button>
        <button
          onClick={() => setName("Mitanshu")}
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Change name to Mitanshu
        </button>
      </div>
    </>
  );
};

export default ShowName;
