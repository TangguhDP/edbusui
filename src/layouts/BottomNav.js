import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconsEdukasiOff,
  IconsEdukasiOn,
  IconsHiburanOff,
  IconsHiburanOn,
  IconsHomeOff,
  IconsHomeOn,
  IconsInfoOff,
  IconsInfoOn,
} from "../components/Icons";

export default function BottomNav() {
  const pathname = useLocation().pathname;
  return (
    <div className="sm:hidden h-16 w-full bg-greenPea fixed bottom-0 p-2 flex flex-row justify-around items-center">
      <Link
        to="/"
        className="flex flex-col justify-center items-center p-2 transition-all ease-out duration-75 text-clearDay w-16"
      >
        {pathname === "/" ? (
          <>
            <IconsHomeOn className="w-7 h-7" />
            <small className="font-semibold transition-all ease-out duration-100">Home</small>
          </>
        ) : (
          <IconsHomeOff className="w-7 h-7" />
        )}
      </Link>
      <Link to='/edukasi' className="flex flex-col justify-center items-center p-2 transition-all ease-out duration-75 text-clearDay w-16">
        {pathname.includes("edukasi") ? (
          <>
            <IconsEdukasiOn className="w-7 h-7" />
            <small className="font-semibold transition-all ease-out duration-100">Edukasi</small>
          </>
        ) : (
          <IconsEdukasiOff className="w-7 h-7" />
        )}
      </Link>
      <Link to='/hiburan' className="flex flex-col justify-center items-center p-2 transition-all ease-out duration-75 text-clearDay w-16">
        {pathname.includes("hiburan") ? (
          <>
            <IconsHiburanOn className="w-7 h-7" />
            <small className="font-semibold transition-all ease-out duration-100">Terapi</small>
          </>
        ) : (
          <IconsHiburanOff className="w-7 h-7" />
        )}
      </Link>
      <Link to='/about-us' className="flex flex-col justify-center items-center p-2 transition-all ease-out duration-75 text-clearDay w-16">
        {pathname === "/about-us" ? (
          <>
            <IconsInfoOn className="w-7 h-7" />
            <small className="font-semibold transition-all ease-out duration-100">Info</small>
          </>
        ) : (
          <IconsInfoOff className="w-7 h-7" />
        )}
      </Link>
    </div>
  );
}
