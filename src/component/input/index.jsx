import React, { useState } from "react";

const InputText = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <label>
        Введите своё имя:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Привет, {name}!</p>
    </div>
  );
};

export default InputText;
