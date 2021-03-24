import React from "react";
import Card from "../../components/Card";

export default function index() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
      <Card
        to="/hiburan/videos"
        title="Hiburan Audio Visual"
        className="col-span-2"
      />
      <Card
        to="/hiburan/vr-videos"
        title="Virtual Reality"
        className="col-span-2"
      />
    </div>
  );
}
