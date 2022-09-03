import { useState } from "react";
import { Home } from "./Home";
import { Post } from "./Post";
import { Page } from "./Page";
import { Write } from "./Write";

function App() {
  const [isWritePost, setIsWritePost] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div>{!isWritePost && <Home setIsWritePost={setIsWritePost} />}</div>
      <div>{isWritePost && <Write setIsWritePost={setIsWritePost} />}</div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isWritePost && (
          <Page setCurrentPage={setCurrentPage} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
}

export default App;
