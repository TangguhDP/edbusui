import React from "react";

export default function Banner() {
  return (
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
  );
}
