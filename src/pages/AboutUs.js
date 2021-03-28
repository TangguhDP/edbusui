import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function AboutUs() {
  return (
    <>
      <Hero title="Tangguh Destio Pramono" />
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
    </>
  );
}
