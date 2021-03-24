import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, className, to }) {
  return (
    <Link
      to={to || "/"}
      className={`w-full h-28 rounded-md relative ring-1 ring-gray-400 shadow-lg flex transition-all ease-in-out focus:outline-none cursor-pointer overflow-hidden ${className}`}
    >
      <img
        alt="Banner"
        src="https://source.unsplash.com/random/2060x760"
        className="object-cover bg-transparent h-full w-full object-center"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black flex p-2 items-end">
        <h1 className="font-semibold text-white">{title}</h1>
      </div>
      {/* <h1>{title}</h1> */}
    </Link>
  );
}
