import React from "react";
import Hero from "../../components/Hero";

export default function VRs() {
  return (
    <Hero title="Virtual Reality">
      <div className="flex justify-center">
        <a
          target="_blank"
          href="https://youtu.be/XXYlFuWEuKI"
          rel="noreferrer"
          className="inline-flex sm:hidden text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Buka Youtube Vr s
        </a>
      </div>
   </Hero>
  );
}
