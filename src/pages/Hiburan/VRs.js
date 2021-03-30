import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function VRs() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero img='../images/Virtual_Reality.png' title="Virtual Reality">
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
      </Wrapper>
    </>
  );
}
