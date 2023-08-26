import React from "react";
import ServiceRequestUs from "./ServiceRequestUs";

const ServiceRequestButton = (props) => {
  const { classes } = props;
  return (
    <div className={`flex items-center ${classes}`}>
      <ServiceRequestUs />
    </div>
  );
};

export default ServiceRequestButton;
