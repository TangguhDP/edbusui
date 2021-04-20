import React from "react";
import Card from "../../components/Card";
import Banner from "../../layouts/Banner";
import { Wrapper } from "../../layouts/Content";

export default function index() {
  return (
    <>
      <Banner />
      <Wrapper>
        <h1 className="font-semibold text-left text-2xl mb-4 pb-1 border-b-2">
          Terapi Audio Visual
        </h1>
        <div className="grid grid-cols-2  gap-x-5 gap-y-10 mx-auto">
        <Card
            img="../images/Audio_Visual.png"
            to="/hiburan/videos"
            title="Video"
            className="col-span-2 md:col-auto"
          />
          <Card
            img="../images/Virtual_Reality.png"
            to="/hiburan/vr-videos"
            title="Virtual Reality"
            className="col-span-2 md:col-auto"
          />
        </div>
      </Wrapper>
    </>
  );
}
