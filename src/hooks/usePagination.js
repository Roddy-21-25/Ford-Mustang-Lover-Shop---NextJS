import { useState } from "react";

function usePagination(itemsPerPage, promise) {
  const [currentPage, setCurrentPage] = useState(0);

  // Divide el array en páginas
  const totalPages = Math.ceil(promise.length / itemsPerPage);
  const groupedPromise = Array.from({ length: totalPages }, (_, i) =>
    promise.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    groupedPromise,
    nextPage,
    prevPage,
    totalPages,
  };
}

export default usePagination;
