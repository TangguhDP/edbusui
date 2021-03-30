import React from "react";
import Card from "../components/Card";
import Banner from "../layouts/Banner";
import { Wrapper } from "../layouts/Content";

export default function Landing() {
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
        <h1 className="text-left text-4xl mb-4 pb-1 border-b-2 font-bold">
          EDBUSUI
        </h1>
        <p className="pb-2 text-justify md:text-lg">
          Aplikasi <b>EDBUSUI</b> merupakan aplikasi yang dikhususkan untuk para
          Ibu menyusui agar dapat teredukasi dalam proses menyusui si kecil.
          Dengan memberikan fasilitas edukasi seperti{" "}
          <span className="font-semibold">edukasi ASI ekslusif</span>,{" "}
          <span className="font-semibold">
            cara menyusui si kecil dengan panduan terpadu
          </span>
          ,{" "}
          <span className="font-semibold">
            informasi untuk menjaga kestabilan hormon oksitosin
          </span>
          , dan
          <span className="font-semibold"> edukasi bagi partner menyusui</span>.
        </p>

        <p className="pb-2 text-justify md:text-lg">
          Selain itu, aplikasi ini mempunyai fitur Hiburan untuk mendukung
          proses rangsangan <b>Hormon Oksitosin</b> untuk para ibu yang
          mengalami kesulitan mengeluarkan ASI. Dengan menyediakan konten audio
          visual khusus yang sudah disesuaikan agar dapat membantu merangsang
          Hormon Oksitosin dalam bentuk{" "}
          <span className="font-semibold">kumpulan video youtube</span> dan{" "}
          <span className="font-semibold italic">Youtube Virtual Reality</span>.
        </p>

        <h1 className="font-semibold text-left text-2xl mb-4 pb-1 border-b-2">
          Edukasi
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mx-auto">
          <Card to="/edukasi/asi" title="ASI Ekslusif" />
          <Card to="/edukasi/menyusui" title="Cara Menyusui" />
          <Card to="/edukasi/oksitosin" title="Hormon Oksitosin" />
          <Card to="/edukasi/partner-menyusui" title="Partner Menyusui" />
        </div>
        <h1 className="font-semibold text-left text-2xl my-4 pb-1 border-b-2">
          Hiburan
        </h1>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
          <Card
            to="/hiburan/videos"
            title="Hiburan Audio Visual"
            className="col-span-2 md:col-auto"
          />
          <Card
            to="/hiburan/vr-videos"
            title="Virtual Reality"
            className="col-span-2 md:col-auto"
          />
        </div>
      </Wrapper>
    </>
  );
}
