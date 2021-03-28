import React from "react";
import Card from "../../components/Card";

export default function index() {
  return (
    <>
      <h1 className="font-semibold text-left text-2xl mb-4 pb-1 border-b-2">
        Hiburan
      </h1>
      <div className="grid grid-cols-2  gap-x-5 gap-y-10 mx-auto">
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
    </>
  );
}
