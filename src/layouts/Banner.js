import React from "react";

export default function Banner(props) {
  return (
    <div className="w-full h-44 md:h-96 relative">
      <img
        alt="Banner"
        src={props.img || `../images/Landing.png`}
        className="object-cover bg-transparent h-full w-full object-center"
      />
      <div className="w-full h-full bg-black absolute inset-0 bg-opacity-60 text-white font-semibold text-xl flex flex-col items-start justify-center p-4 md:px-24">
        {props.children ? (
          props.children
        ) : (
          <>
            <div className="w-full md:w-3/5 md:mt-20 break-words">
              <h1 className="text-2xl md:text-3xl pb-2">
                Selamat Datang di <b>EDBUSUI</b>
              </h1>
              <hr className="pt-1" />
              <h1 className="text-base md:text-xl text-gray-200">
                Sistem Informasi Edukasi Rangsangan Hormon Oksitosin untuk Ibu
                Menyusui
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
