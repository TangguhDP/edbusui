import React, { useState } from "react";

export default function OksitosinTips() {
  const active =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-paradiso text-paradiso tracking-wider rounded-t";
  const deactive =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider";
  const [content, setContent] = useState("Peran");
  return (
    <section className="text-gray-600 body-font md:mt-6">
      <div className="container mx-auto flex flex-wrap flex-col">
        <div className="flex md:mx-auto flex-wrap mb-10">
          <button
            onClick={() => setContent("Peran")}
            className={`${
              content === "Peran" ? active : deactive
            } focus:outline-none outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            Peran
          </button>
          <button
            onClick={() => setContent("Faktor")}
            className={`${
              content === "Faktor" ? active : deactive
            } focus:outline-none outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Faktor
          </button>
        </div>
        {content === "Peran" ? <Peran /> : <Faktor />}
      </div>
    </section>
  );
}

function Peran() {
  return (
    <>
      <div className="flex flex-col w-full items-center space-y-4 text-justify text-base">
        <h1 className="text-xl font-medium text-center mb-2 text-gray-900">
          Peran Hormon Oksitosin
        </h1>
        <ol className="pl-6 list-decimal font-bold text-lg text-gray-900 md:w-2/4 space-y-2">
          <li>
            Mempersiapkan kelahiran bayi
            <p className="leading-relaxed font-normal text-base">
              Menjelang persalinan, tubuh wanita akan menghasilkan hormon
              oksitosin untuk merangsang kontraksi rahim. Hormon ini juga
              meningkatkan produksi prostaglandin, sehingga kontraksi semakin
              intens dan memengaruhi proses pembukaan.
            </p>
            <p className="leading-relaxed mt-2 font-normal text-base">
              Karena efek ini, dokter atau bidan terkadang memberikan oksitosin
              sintetis (pitocin) untuk induksi persalinan. Oksitosin juga
              mungkin disuntikkan untuk membantu pengeluaran plasenta dan
              mengurangi perdarahan.
            </p>
          </li>
          <li>
            Melancarkan ASI
            <p className="leading-relaxed font-normal text-base">
              Pada ibu menyusui, oksitosin memicu ‘letdown reflex’, yaitu
              sensasi geli pada payudara yang membuat ASI mengalir keluar dari
              puting. Oleh karena itu, hormon oksitosin berperan penting dalam
              produksi ASI dan proses menyusui.
            </p>
          </li>
          <li>
            Meredakan stres pada ibu baru
            <p className="leading-relaxed font-normal text-base">
              Saat bayi mengisap puting ibunya, saraf di payudara ibu akan
              mengirimkan sinyal ke otak untuk melepaskan oksitosin. Selain
              untuk merangsang produksi ASI, hormon oksitosin ini juga dapat
              meredakan stres dan mengurangi rasa cemas pada ibu.
            </p>
          </li>
          <li>
            Memperkuat ikatan antara ibu dan bayi
            <p className="leading-relaxed font-normal text-base">
              Beberapa studi menunjukkan bahwa hormon oksitosin juga berperan
              dalam menumbuhkan perasaan cinta dan kasih sayang antara ibu dan
              bayinya. Studi tersebut menyebutkan bahwa ibu yang memiliki hormon
              oksitosin lebih tinggi cenderung akan lebih aktif dan cermat
              merawat bayinya. Hormon oksitosin juga disebut berperan dalam
              merangsang sentuhan fisik antara ibu dan ayah dengan bayinya,
              sehingga ikatan antara orang tua dan bayinya menjadi lebih kuat.
            </p>
          </li>
          <li>
            Menumbuhkan perasaan tertarik terhadap orang lain
            <p className="leading-relaxed font-normal text-base">
              Oksitosin juga berperan dalam menimbulkan rasa empati dan
              kesetiaan serta meningkatkan rasa percaya satu sama lain. Hal
              inilah yang akhirnya berkontribusi terhadap kelanggengan hubungan.
            </p>
            <p className="leading-relaxed mt-2 font-normal text-base">
              Sedangkan dalam hubungan seksual, sentuhan fisik seperti memeluk,
              mencium, dan menyentuh pasangan akan mendorong pelepasan oksitosin
              yang berperan dalam proses ereksi dan orgasme. Selain itu,
              oksitosin juga mendukung pergerakan sperma menuju sel telur.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}

function Faktor() {
  return (
    <>
      <div className="flex flex-col w-full items-center space-y-4 text-justify text-base">
        <h1 className="text-xl font-medium text-center mb-2 text-gray-900">
          Faktor-Faktor yang mempengaruhi Hormon Oksitosin
        </h1>
        <p className="md:w-2/4 leading-relaxed">
          Ketika bayi menyusu pada payudara ibunya, rangsangan tersebut
          menyebabkan pelepasan oksitosin, yang selanjutnya memerintahkan tubuh
          untuk memeras ASI untuk diminum bayi. Oleh karena itu, penting untuk
          membuat refleks oksitosin ini bisa bekerja dengan baik agar ASI bisa
          mengalir dengan lancar.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          Bagaimana jika refleks oksitosin ini tidak bekerja dengan baik? Bayi
          akan mengalami kesulitan untuk mendapatkan ASI, Bunda. Payudara
          seolah-olah telah berhenti memproduksi ASI, padahal payudara tetap
          menghasilkan ASI namun tidak mengalir keluar.
        </p>
        <p className="md:w-2/4 leading-relaxed">
          Kondisi yang dianggap dapat mempengaruhi (meningkatkan) produksi
          hormon oksitosin
          <ol className="pl-6 py-4 list-decimal space-y-2">
            <li>Saat Bunda mencurahkan kasih sayang terhadap bayinya.</li>
            <li>Saat Bunda mendengar celotehan atau tangisan bayi.</li>
            <li>
              Dukungan ayah dalam pengasuhan bayi, seperti menggendong bayi ke
              ibu saat akan disusui atau disendawakan, mengganti popok dan
              memandikan bayi, bermain, mendendangkan bayi, dan membantu
              pekerjaan rumah tangga.
            </li>
            <li>
              Saat Bunda memijat bayi, ada perasaan bahagia ditambah bayi
              menjadi lebih ceria sehingga perlekatan bekerja dengan baik.
            </li>
          </ol>
          Kondisi yang dapat mengurangi produksi hormon oksitosin
          <ol className="pl-6 py-4 list-decimal space-y-2">
            <li>
              Ibu menyusui merasa cemas, sedih, marah, kesal, atau bingung.
            </li>
            <li>
              Ibu menyusui merasa cemas terhadap perubahan bentuk pada payudara
              dan bentuk tubuhnya, meninggalkan bayi karena harus bekerja dan
              ASI tidak mencukupi kebutuhan bayi.
            </li>
            <li>Bunda merasa sakit terutama saat menyusui</li>
          </ol>
        </p>
      </div>
    </>
  );
}
