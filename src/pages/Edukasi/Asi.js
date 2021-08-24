import React from "react";
import AsiStepper from "../../components/AsiStepper";
import Hero from "../../components/Hero";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function Asi() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero
          img="../images/ASI_Eksklusif.png"
          title="ASI Eksklusif"
          desc="ASI Eksklusif adalah proses pemberian ASI tanpa makanan dan minuman tambahan lain pada si kecil yang berumur 0 sampai 6 bulan.
          Menurut WHO (World Health Organization), penerapan ASI Eksklusif sudah baik bagi si kecil karena nutrisi yang dikandungnya sudah mencukupi untuk 6 bulan pertama kehidupan.
          Namun bukan berarti setelah pemberian ASI eksklusif pemberian ASI eksklusif pemberian ASI dihentikan, akan tetapi tetap diberikan kepada bayi sampai bayi berusia 2 tahun.
        "
        />
        <AsiStepper />
        <section className="overflow-hidden text-gray-700 body-font md:mt-6">
          <div className="container mx-auto lg:px-10">
            <div className="flex flex-wrap md:flex-no-wrap">
              <div className="w-full h-full">
                <iframe
                  title="video"
                  className="object-cover object-center w-full md:w-5/6 mx-auto h-64 rounded-lg md:h-xxl"
                  src="https://www.youtube.com/embed/YOUyl0nTuno"
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
