import React from "react";
import Hero from "../components/Hero";
import Banner from "../layouts/Banner";
import { Wrapper } from "../layouts/Content";

export default function AboutUs() {
  return (
    <>
      <Banner>
        <div className="w-full md:w-3/5 md:mt-20 break-words">
          <h1 className="text-2xl md:text-3xl pb-2">
            Selamat Datang di <b>EDBUSUI</b>
          </h1>
          <hr className="pt-1" />
          <h1 className="text-base md:text-xl text-gray-200">
            Sistem Informasi Edukasi Rangsangan Hormon Oksitosin untuk Ibu
            Menyusui
          </h1>
        </div>
      </Banner>
      <Wrapper>
        <Hero
          img="../images/pp.jpg"
          title="Profil pengembang dan sistem"
          desc="Tangguh Destio Pramono adalah seorang mahasiswa tingkat akhir Universitas Gunadarma jurusan Sistem Infromasi. 
          Tangguh membuat Sistem Informasi Edukasi Rangsangan Hormon Oksitosin pada Ibu Menyusui sebagai bentuk karya tulis ilmiah atau skripsi. 
          Penggunaan website ini ditujukan untuk para ibu menyusui agar mempunyai pengetahuan terhadap penting nya asi untuk bayinya serta sebagai percobaan
          terapi bagi ibu menyusui yang mengalami kesulitan dalam mengeluarkan air susunya."
        />
        <section className="text-gray-600 body-font relative md:mt-6">
          <div className="container flex w-full flex-row">
            <div className="w-full md:h-96 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-center relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15861.286072344908!2d106.8379071!3d-6.3524057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3161aef36b1ca!2sPerpustakaan%20Kampus%20H%20Gunadarma!5e0!3m2!1sid!2sid!4v1616918580804!5m2!1sid!2sid"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Jalan Akses UI, Pasir Gn. Sel., Kec. Cimanggis, Kota Depok,
                    Jawa Barat 16451
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:tangguhmyname@gmail.com"
                    className="text-indigo-500 leading-relaxed"
                  >
                    tangguhmyname@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+62821-1005-6991</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
