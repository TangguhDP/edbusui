import React from "react";
import Hero from "../../components/Hero";
import TextPartner from "../../components/TextPartner";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function Partner() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero
          img="../images/Partner_Menyusui.png"
          title="Partner"
          desc="Proses menyusui si kecil akan terasa lebih mudah jika ada orang terdekat yang ikut hadir mendukung dan menyemangati. karena pada masa seperti itu, ibu akan sangat membutuhkan informasi, istirahat, dan waktu untuk belajar. 
          Hal yang terpenting adalah membutuhkan dukungan moral dan komitmen yang menjanjikan dari orang terdekat agar proses menyusui menjadi sukses.
          "
        />
        <TextPartner />
        <section className="overflow-hidden text-gray-700 body-font md:mt-6">
          <div className="container mx-auto lg:px-10">
            <div className="flex flex-wrap md:flex-no-wrap">
              <div className="w-full h-full">
                <iframe
                  title="video"
                  className="object-cover object-center w-full md:w-5/6 mx-auto h-64 rounded-lg md:h-xxl"
                  src="https://www.youtube.com/embed/cHCWBQ4s3zY"
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
