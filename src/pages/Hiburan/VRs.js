import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function VRs() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Hero
          img="../images/Virtual_Reality.png"
          title="Virtual Reality"
          desc="Pemanfaatan teknologi Virtual Reality dapat membantu dan meningkatkan pengalaman pengguna dalam menikmati audio visual. 
          Dengan pengalaman seperti berinteraksi secara langsung dengan lingkungan sekitar, akan dapat meningkatkan kemampuan 
          rangsangan hormon oksitosin pada ibu menyusui dengan Virtual Reality bertemakan ketenangan, kenyamanan dan bayi."
        >
          <div className="flex justify-center">
            <a
              target="_blank"
              href="https://youtu.be/playlist?list=PLHH1cK99CprT-8rpBxDlIuImkghb9QSid"
              rel="noreferrer"
              className="inline-flex sm:hidden text-clearDay bg-greenPea border-0 py-2 px-6 focus:outline-none hover:bg-paradiso rounded text-lg"
            >
              Buka Youtube VR
            </a>
          </div>
        </Hero>
      </Wrapper>
    </>
  );
}
