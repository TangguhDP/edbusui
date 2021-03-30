import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function Videos() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero img='../images/Audio_Visual.png' title="Audio Visual" />
        <section className="overflow-hidden text-gray-700 body-font md:mt-6">
          <div className="container mx-auto lg:px-10">
            <div className="flex flex-wrap md:flex-no-wrap">
              <div className="w-full h-full">
                <iframe
                  title="video"
                  className="object-cover object-center w-full md:w-5/6 mx-auto h-64 rounded-lg md:h-xxl"
                  src="https://www.youtube.com/embed/videoseries?list=PLHH1cK99CprSYH-HwyHvWm-OvQFzuXxrJ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
