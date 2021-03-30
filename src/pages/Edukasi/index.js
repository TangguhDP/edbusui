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
          Edukasi
        </h1>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
          <Card to="/edukasi/asi" title="Asi Ekslusif" />
          <Card to="/edukasi/menyusui" title="Cara Menyusui" />
          <Card to="/edukasi/oksitosin" title="Hormon Oksitosin" />
          <Card to="/edukasi/partner-menyusui" title="Partner Menyusui" />
        </div>
      </Wrapper>
    </>
  );
}
