import React, { useState } from "react";

const ColorText = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  const style = {
    color: color
  };
  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Цвет текста можно сментить нажатием кнопки.</p>
    </div>
  );
};

export default ColorText;
