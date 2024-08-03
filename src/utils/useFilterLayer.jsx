import React, { useState } from "react";

const useFilterLayer = () => {
  const [filterLayer, setFilterLayer] = useState(false);

  const updateFilterLayer = (value) => {
    setFilterLayer(value);
  };
  console.log('useFilterLayer ===>', filterLayer)
  return [filterLayer, updateFilterLayer];
};

export default useFilterLayer;
