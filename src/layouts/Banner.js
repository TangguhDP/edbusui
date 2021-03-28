import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-44 md:h-96 relative">
      <img
        alt="Banner"
        src="https://source.unsplash.com/random/2060x760"
        className="object-cover bg-transparent h-full w-full object-center"
      />
      <div className="w-full h-full bg-black absolute inset-0 bg-opacity-40 text-white font-semibold text-xl flex flex-col items-start justify-center p-4 md:px-24">
        <h1 className='text-2xl md:text-3xl'>Selamat Datang ibu ibu</h1>
        <h1 className='text-base md:text-1xl text-gray-200'>Siap untuk menyusui si kecil?</h1>
      </div>
    </div>
  );
}
