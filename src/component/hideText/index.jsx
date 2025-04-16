import React, { useState } from "react";

const HideText = () => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText((showText) => !showText);
  };
  return (
    <>
      {showText && <p>Этот текст можно скрыть нажатием кнопки</p>}
      <button onClick={handleClick}>Показатьт/Скрыть теск</button>
    </>
  );
};

export default HideText;
