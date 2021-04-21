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
      </Wrapper>
    </>
  );
}
