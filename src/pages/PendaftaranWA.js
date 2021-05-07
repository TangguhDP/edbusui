import React, { useState } from "react";
import { InputArea, InputText } from "../components/Inputs";
import Banner from "../layouts/Banner";
import { Wrapper } from "../layouts/Content";

export default function PendaftaranWA() {
  const [inputs, setInputs] = useState({
    namaOrtu: "",
    namaAnak: "",
    umurAnak: 1,
    nomor: "",
    asal: "",
    alamat: "",
    email: "",
  });
  console.log(inputs);
  return (
    <>
      <Banner img="../images/Landing.png">
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
        <form
          action={`https://api.whatsapp.com/send?phone=6281283143935&text=Assalamualaikum%2C%20Bu%20Saya%20mau%20daftar%20ke%20Klinik%20untuk%20perawatan%20bayi.%0ANama%20Orang%20Tua%3A${inputs.namaOrtu}%2C%0ANama%20Anak%3A${inputs.namaAnak}%2C%0AUmur%3A${inputs.umurAnak}%2C%0ATelepon%3A${inputs.nomor}%2C%0AEmail%3A${inputs.email}%2C%0AAsal%3A${inputs.asal}%2C%0AAlamat%3A${inputs.alamat}%0ATerimakasih%20bunda`}
          className="md:w-2/4 flex flex-col mx-auto space-y-2 mb-4"
        >
          <InputText
            id="namaOrtu"
            name="namaOrtu"
            label="Nama Orang Tua"
            placeholder="Nama Orang Tua..."
            onChange={(e) => setInputs({ ...inputs, namaOrtu: e.target.value })}
          />
          <InputText
            id="namaAnak"
            name="namaAnak"
            label="Nama Anak"
            placeholder="Nama Anak..."
            onChange={(e) => setInputs({ ...inputs, namaAnak: e.target.value })}
          />
          <InputText
            type="number"
            id="umurAnak"
            name="umurAnak"
            label="Umur Anak"
            smallText="dalam bulan"
            placeholder="Umur Anak..."
            addProps={{ max: 72, min: 1, defaultValue: 1 }}
            onChange={(e) => setInputs({ ...inputs, umurAnak: e.target.value })}
          />
          <InputText
            type="tel"
            id="nomor"
            name="nomor"
            label="Nomor Telepon"
            placeholder="082xxx"
            onChange={(e) => setInputs({ ...inputs, nomor: e.target.value })}
          />
          <InputText
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="ibu@bunda.com"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <InputText
            id="asal"
            name="asal"
            label="Daerah Asal"
            smallText="(Kota/Kabupaten)"
            placeholder="Jakarta"
            onChange={(e) => setInputs({ ...inputs, asal: e.target.value })}
          />
          <InputArea
            id="alamat"
            name="alamat"
            label="Alamat"
            placeholder="Alamat..."
            onChange={(e) => setInputs({ ...inputs, alamat: e.target.value })}
          />
          {inputs.namaAnak &&
            inputs.namaOrtu &&
            inputs.asal &&
            inputs.nomor &&
            inputs.alamat &&
            inputs.email && (
              <button
                type="submit"
                className="text-clearDay text-center font-bold text-lg bg-greenPea border-0 p-4 focus:outline-none hover:bg-paradiso rounded transition-all ease-in"
              >
                SUBMIT
              </button>
            )}
        </form>
      </Wrapper>
    </>
  );
}
