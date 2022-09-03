import { useState } from "react";

export function Write({ setIsWritePost }) {
  const [textValue, setTextValue] = useState("");
  function handlePost() {
    setIsWritePost(false);
  }
  function hanldeChange(e) {
    setTextValue(e.target.value);
  }
  return (
    <div>
      <textarea
        style={{ width: "100%", height: "70vh" }}
        value={textValue}
        onChange={hanldeChange}
      />
      <button onClick={handlePost}>글쓰기</button>
    </div>
  );
}
