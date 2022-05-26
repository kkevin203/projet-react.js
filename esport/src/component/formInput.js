import React, { useState } from "react";

const FormInput = ({ label, placeholder, color }) => {
  const [inpuValue, setInputValue] = useState("Thomas");
  const handelChange = (event) => {
    setInputValue(event.target.value);
    constmyStules={
        color,
        background: 'black',
        padding: '1rem'
    };
  };
  return (
    <div>
      <label style={myStyles}>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handelChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInput;
