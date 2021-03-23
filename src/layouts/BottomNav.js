import React from "react";

export default function BottomNav() {
  return (
    <div className="h-16 w-full bg-gray-700 fixed bottom-0 p-2 flex flex-row justify-around items-center">
      <div className="flex flex-col justify-center items-center p-2 hover:bg-red-400 transition-all ease-out duration-75 cursor-pointer">
        <div className="w-8 h-8 bg-white rounded-full" />
        <small className="font-semibold text-white">Home</small>
      </div>
      <div className="flex flex-col justify-center items-center p-2 hover:bg-red-400 transition-all ease-out duration-75 cursor-pointer">
        <div className="w-8 h-8 bg-white rounded-full" />
        <small className="font-semibold text-white">Edukasi</small>
      </div>
      <div className="flex flex-col justify-center items-center p-2 hover:bg-red-400 transition-all ease-out duration-75 cursor-pointer">
        <div className="w-8 h-8 bg-white rounded-full" />
        <small className="font-semibold text-white">Hiburan</small>
      </div>
      <div className="flex flex-col justify-center items-center p-2 hover:bg-red-400 transition-all ease-out duration-75 cursor-pointer">
        <div className="w-8 h-8 bg-white rounded-full" />
        <small className="font-semibold text-white">Info</small>
      </div>
    </div>
  );
}
