import React from "react";
import Hero from "../../components/Hero";

export default function VRs() {
  return (
    <Hero title="Virtual Reality">
      <div className="flex justify-center">
        <a
          target="_blank"
          href="https://youtu.be/playlist?list=PLHH1cK99CprT-8rpBxDlIuImkghb9QSid"
          rel="noreferrer"
          className="inline-flex sm:hidden text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Buka Youtube VR
        </a>
      </div>
   </Hero>
  );
}
