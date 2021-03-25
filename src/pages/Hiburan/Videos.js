import React from "react";
import Hero from "../../components/Hero";

export default function Videos() {
  return (
    <>
     <Hero title='Audio Visual'/>
      <section className="overflow-hidden text-gray-700 body-font">
        <div className="container mx-auto lg:px-10">
          <div className="flex flex-wrap md:flex-no-wrap">
            <div className="w-full ">
              <iframe
                title="video"
                className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLHH1cK99CprSYH-HwyHvWm-OvQFzuXxrJ"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
