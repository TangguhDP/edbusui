import React from "react";

export default function Content(props) {
  return (
    <div className="relative w-full h-full bg-backgroundColor flex flex-col md:mt-20">
      {props.children}
    </div>
  );
}

export function Wrapper(props) {
  return <div className="container mx-auto p-4 mb-20">{props.children}</div>;
}
