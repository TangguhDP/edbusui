import React from "react";
import Hero from "../../components/Hero";
import MenyusuiStep from "../../components/MenyusuiStep";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function Menyusui() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero
          img="../images/Cara_Menyusui.png"
          title="Cara Menyusui"
          desc="Teknik menyusui yang benar harus diperhatikan ketika ibu sedang melakukan pemberian ASI. 
          Pada wanita yang sedang menyusui, apabila teknik menyusuinya tidak benar akan menyebabkan puting susu lecet, 
          pengeluaran ASI yang tidak lancar dan rasa nyeri yang timbul apabila ibu menghentikan menyusui dengan kurang hati-hati. 
          Pengeluaran ASI yang tidak lancar bila didukung dengan waktu menyusu terbatas maka dapat menyebabkan payudara menjadi bengkak 
          (Kumorojati dan Windayani, 2017)."
        />
        <MenyusuiStep />
        <section className="overflow-hidden text-gray-700 body-font md:mt-6">
          <div className="container mx-auto lg:px-10">
            <div className="flex flex-wrap md:flex-no-wrap">
              <div className="w-full h-full">
                <iframe
                  title="video"
                  className="object-cover object-center w-full md:w-5/6 mx-auto h-64 rounded-lg md:h-xxl"
                  src="https://www.youtube.com/embed/8JD4a2uAIys"
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
