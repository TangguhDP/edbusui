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
      </Wrapper>
    </>
  );
}
