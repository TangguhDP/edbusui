import React from "react";

export default function VRs() {
  return (
    <>
      <section className="text-gray-600">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              Virtual Reality
            </h1>
            <p className="mb-8 leading-relaxed text-justify md:text-left">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
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
      </section>
    </>
  );
}
