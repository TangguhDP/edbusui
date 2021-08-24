import React from "react";
import Hero from "../../components/Hero";
import OksitosinTips from "../../components/OksitosinTips";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function Oksitosin() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero
          img="../images/Hormon_Oksitosin.png"
          title="Hormon Oksitosin"
          desc="Hormon oksitosin adalah hormon yang berperan untuk memicu Letdown Reflex secara alami. 
          Semakin tinggi level hormon oksitosin akan memaksimalkan kapasitas jumlah penyimpanan ASI pada payudara.
          Faktor-faktor yang menyebabkan peningkatan hormon oksitosin dan Letdown Reflex antara lain, seperti ketika ibu menyusui membayangkan menyusui anaknya, 
          melihat bayi, mendengarkan suara bayi, dan mencium bayi (Soetjiningsih, 2005)."
        />
        <OksitosinTips />
        <section className="overflow-hidden text-gray-700 body-font md:mt-6">
          <div className="container mx-auto lg:px-10">
            <div className="flex flex-wrap md:flex-no-wrap">
              <div className="w-full h-full">
                <iframe
                  title="video"
                  className="object-cover object-center w-full md:w-5/6 mx-auto h-64 rounded-lg md:h-xxl"
                  src="https://www.youtube.com/embed/7Y0Vq_9FxVg"
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
