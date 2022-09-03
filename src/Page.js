import { useEffect, useState } from "react";

const LAST_PAGE = 100;

export function Page({ currentPage, setCurrentPage }) {
  console.log(currentPage);
  const [page, setPage] = useState([]);
  useEffect(() => {
    if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
      setPage([1, 2, 3, 4, 5]);
      return;
    }
    if (
      currentPage === LAST_PAGE ||
      currentPage === LAST_PAGE - 1 ||
      currentPage === LAST_PAGE - 2
    ) {
      setPage([
        LAST_PAGE - 4,
        LAST_PAGE - 3,
        LAST_PAGE - 2,
        LAST_PAGE - 1,
        LAST_PAGE,
      ]);
      return;
    }
    setPage([
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ]);
  }, [currentPage]);
  function handleFirst() {
    setCurrentPage(1);
  }
  function handleLast() {
    setCurrentPage(LAST_PAGE - 2);
  }
  function handleAfter() {
    setCurrentPage((prev) => {
      if (prev + 3 < LAST_PAGE) {
        return prev + 3;
      } else {
        return LAST_PAGE;
      }
    });
  }
  function handleBefore() {
    setCurrentPage((prev) => {
      if (prev - 3 < 1) {
        return 1;
      } else {
        return prev - 3;
      }
    });
  }
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      <button onClick={handleFirst}>{"<<"}</button>
      <button onClick={handleBefore}>{"<"}</button>
      {page.map((page) => {
        function handlePageClick() {
          setCurrentPage(page);
        }
        return (
          <div key={page}>
            <button onClick={handlePageClick}>{page}</button>
          </div>
        );
      })}
      <button onClick={handleAfter}>{">"}</button>
      <button onClick={handleLast}>{">>"}</button>
    </div>
  );
}
