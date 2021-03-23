import React from "react";

export default function Landing() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
      <div className="w-full h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
      <div className="w-full h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
      <div className="w-full h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
      <div className="w-full h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
      <div className="w-auto h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg col-span-2" />
      <div className="w-auto h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg col-span-2" />
    </div>
  );
}
