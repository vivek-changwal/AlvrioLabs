import React from "react";

const Button = (props) => {
  const { classes } = props;
  return (
    <button
      type="button"
      className={`text-white bg-secondary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center ${classes}`}
    ><a href="mailto:pradeep@alvrio.io">
      GET IN TOUCH
      </a>
    </button>
  );
};

export default Button;
