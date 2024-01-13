import { useState } from "react";

const useCarList = (initialPromise) => {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const filteredPromise = selectedOption
    ? [initialPromise]
        .flat()
        .filter((info) => info.name.includes(selectedOption))
    : initialPromise;

  const totalPages = Math.ceil(filteredPromise.length / itemsPerPage);
  const groupedPromise = Array.from({ length: totalPages }, (_, i) =>
    filteredPromise.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
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

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setCurrentPage(0);
  };

  return {
    itemsPerPage,
    currentPage,
    selectedOption,
    filteredPromise,
    totalPages,
    groupedPromise,
    nextPage,
    prevPage,
    handleChange,
  };
};

export default useCarList;
