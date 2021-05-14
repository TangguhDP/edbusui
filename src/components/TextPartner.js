import React from "react";

export default function TextPartner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      <div className="flex flex-col lg:items-start items-center w-full">
        <div className="flex-grow text-justify text-base space-y-2">
          <h2 className="text-gray-900 text-2xl font-medium mb-3">
            Peran Partner
          </h2>
          <p className="leading-relaxed">
            Peran partner yang paling utang utama adalah menciptakan suasana dan
            situasi kondusif yang dapat memungkinkan pemberian ASI berjalan
            dengan lancar. Selain itu, peran partner adalah untuk memenuhi
            kebutuhan ibu, terutama kebutuhan gizi selama menyusui dan dapat
            berperan sebagai penghubung dalam menyusui dengan membawa bayi
            kepada sang ibu.
          </p>
          <p className="leading-relaxed">
            Partner berperan aktif dalam keberhasilan memberi ASI kepada bayi
            dengan memberi dukungan secara emosional, perhatian dan mendampingi
            ibu selama menyusui. Selain itu, partner juga berperan dalam
            membesarkan dan memberi makan pada anak.
          </p>
          <p className="leading-relaxed">
            Pengawas Minum ASI (PMA) merupakan bagian dari peran partner untuk
            memberikan motivasi kepada ibu dalam peningkatan pelaksanaan
            pemberian ASI eksklusif. Selain itu, partner juga berperan dalam
            mengetahui bagaimana efek dari program ini terhadap perubahan
            pengetahuan, sikap, dan perilaku ibu untuk meningkatkan pelaksanaan
            ASI eksklusif.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:items-start items-center w-full">
        <div className="flex-grow text-justify text-base space-y-2">
          <h2 className="text-gray-900 text-2xl font-medium mb-3">
            Bentuk Dukungan
          </h2>
          <p className="leading-relaxed">
            <ul className="pl-6 list-disc">
              <li>Tim penyemangat</li>
              <li>Membantu mengatasi masalah dalam pemberian ASI</li>
              <li>Membantu merawat bayi</li>
              <li>Mendampingi ibu menyusui walaupun tengah malam</li>
              <li>Melayani ibu menyusui</li>
              <li>Menyediakan anggaran ekstra</li>
              <li>Menjaga romantisme</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
