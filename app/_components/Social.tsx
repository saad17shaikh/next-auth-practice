import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <section className="grid grid-cols-2 gap-x-3">
      <div className="bg-gray-100/10 border hover:border-2 hover:border-black rounded-md duration-300 p-2 flex items-center justify-center cursor-pointer">
        <FaGithub className="w-6 h-6" />
      </div>
      <div className="bg-gray-100/10 border hover:border-2 hover:border-black rounded-md duration-300 p-2 flex items-center justify-center cursor-pointer">
        <FcGoogle className="w-6 h-6" />
      </div>
    </section>
  );
};
