import React, { useState } from "react";

export default function AsiStepper() {
  const active =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-paradiso text-paradiso tracking-wider rounded-t";
  const deactive =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider";
  const [content, setContent] = useState("Timeline");
  return (
    <section className="text-gray-600 body-font md:mt-6">
      <div className="container mx-auto flex flex-wrap flex-col">
        <div className="flex md:mx-auto flex-wrap mb-10">
          <button
            onClick={() => setContent("Timeline")}
            className={`${
              content === "Timeline" ? active : deactive
            } focus:outline-none outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Waktu
          </button>
          <button
            onClick={() => setContent("Manfaat")}
            className={`${
              content === "Manfaat" ? active : deactive
            } focus:outline-none outline-none`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Manfaat
          </button>
        </div>
        {content === "Timeline" ? <Timeline /> : <Manfaat />}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <>
      <div className="flex flex-col w-full items-center space-y-4 text-justify text-base">
        <h1 className="text-xl font-medium text-center mb-2 text-gray-900">
          Penyesuaian Jadwal
        </h1>
        <p className="md:w-2/4 leading-relaxed">
          Pada dasarnya waktu menyusui bayi akan mudah diprediksi karena
          perubahanan nya yang tertata dari bulan pertama. Hal ini dapat
          memudahkan ibu untuk menyesuaikan waktunya dan memprediksi kapan bayi
          menginginkan ASI. Jadwal menyusui juga akan berkurang secara berangsur
          sesuai perkembangan bayi.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          Bulan pertama, setelah beberapa hari pasca bayi dilahirkan sampai
          usianya 1 bulan, keingingan bayi untuk menyusu biasanya timbul setiap
          2 - 3 jam sekali. Jadi bisa terhitung paling tidak sebanyak 8 - 12
          kali sehari pada bulan pertama dan dengan durasi 15 - 45 menit sampai
          bayi merasa kenyang.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          Bulan kedua sampai bulan kelima, jadwal bayi menyusui akan berkurang
          menjadi 7 - 9 kali sehari dengan rentang waktu kurang lebih 2.5 - 3.5
          jam. Jika bayi belum menyusui dalam 4 jam, maka ibu harus membujuk
          atau membangunkannya untuk menyusu.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          Pada bulan akhir masa ASI Eksklusif atau di bulan keenam, jadwal
          menyusui akan berkurang sampai 4 - 6 kali sehari dan dengan rentang
          waktu 5 - 6 jam sekali. Makanan padat dapat diperkenalkan saat bayi
          berusia 6 bulan, untuk melengkapi nutrisi ASI.
        </p>
      </div>
    </>
  );
}

function Manfaat() {
  return (
    <>
      <div className="flex flex-col w-full items-center space-y-4 text-justify text-base">
        <h1 className="text-xl font-medium text-center title-font mb-2 text-gray-900">
          Manfaat
        </h1>
        <p className="md:w-2/4 leading-relaxed">
          Air susu ibu (ASI) adalah sebuah cairan tanpa tanding ciptaan Yang
          Maha Kuasa untuk memenuhi kebutuhan gizi bayi dan melindunginya dalam
          melawan kemungkinan serangan penyakit. Keseimbangan zat-zat gizi dalam
          air susu ibu berada pada tingkat terbaik dan mudah dicerna oleh bayi
          baru lahir.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          ASI kaya akan sari makanan, paling higienis, dengan temperatur yang
          tepat dan kadar gizi yang paling dibutuhkan oleh bayi. ASI memiliki
          banyak manfaat, diantaranya adalah :
          <ul className="pl-4 list-disc">
            <li>Meningkatkan kecerdasan bayi</li>
            <li>Mengurangi risiko penyakit jantung</li>
            <li>Mengurangi risiko obesitas</li>
            <li>Mengurangi risiko kanker</li>
            <li>Mengurangi risiko infeksi saluran pernapasan dan diare</li>
            <li>
              Membuat bayi lebih tenang dan tidak mudah gelisah untuk waktu yang
              lama, terutama dalam kondisi yang membuat stres
            </li>
            <li>Mengurangi kejadian alergi pada anak</li>
          </ul>
          <br></br>
          Dan bagi ibu menyusui manfaatnya antara lain :
          <ul className="pl-4 list-disc">
            <li>
              Menambah panjang kembalinya kesuburan pasca melahirkan, sehingga
              dapat digunakan sebagai kontrasepsi alami
            </li>
            <li>
              Ibu lebih cepat langsing. Penelitian membuktikan bahwa ibu
              menyusui enam bulan lebih langsing setengah kg dibanding ibu yang
              menyusui empat bulan
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
