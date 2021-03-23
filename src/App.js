import React from "react";

function App() {
  return (
    <div className="relative w-full h-full bg-gray-200 flex flex-col">
      <div className="w-full h-32 relative">
        <img
          alt="Banner"
          src="https://source.unsplash.com/random/2060x760"
          className="object-cover bg-transparent h-full w-full object-center"
        />
        <div className="w-full h-full bg-black absolute inset-0 bg-opacity-40 text-white font-semibold text-xl flex items-center">
          <h1 className="p-4">Selamat Datang...</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10 p-4 mx-auto mb-16">
        <div className="w-28 h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
        <div className="w-28 h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
        <div className="w-28 h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
        <div className="w-28 h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg" />
        <div className="w-auto h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg col-span-2" />
        <div className="w-auto h-28 rounded-md bg-green-800 ring-1 ring-gray-400 shadow-lg col-span-2" />
      </div>
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
    </div>
  );
}

export default App;
