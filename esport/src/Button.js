import React, { useState } from "react";
import PropTypes from 'prop-types';

const Button = () => {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    console.log("cliked");
    setCount(count + 1);
  };

  return (
    <>
      <p>compteur {count}</p>
      <button type="button" onClick={handelClick}>
        Click me
      </button>
    </>
  );
};

export default Button;
