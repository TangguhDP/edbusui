import React from "react";
import Card from "../../components/Card";

export default function index() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-auto">
      <Card to='/edukasi/asi' title="Asi Ekslusif" />
      <Card to='/edukasi/menyusui' title="Cara Menyusui" />
      <Card to='/edukasi/oksitosin' title="Hormon Oksitosin" />
      <Card to='/edukasi/partner-menyusui' title="Partner Menyusui" />
    </div>
  );
}
