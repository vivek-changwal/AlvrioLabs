import React from "react";

const Heading = (props) => {
  return (
    <h1 className="max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center">
      {props.title}
    </h1>
  );
};

export default Heading;
