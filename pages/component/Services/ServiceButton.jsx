import React from "react";
import ServiceContactUs from "./ServiceContactUs";

const ServiceButton = (props) => {
  const { classes } = props;
  return (
    <div className={`flex items-center ${classes}`}>
      <ServiceContactUs />
    </div>
  );
};

export default ServiceButton;
