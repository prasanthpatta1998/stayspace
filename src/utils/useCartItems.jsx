import React, { useState } from "react";

const useCartItems = () => {
  const [items, setItems] = useState([]);
  const [totalCharge, setTotalCharge] = useState(0);

  const updateCartItems = (item) => {
    setItems([
      ...items,
      {
        ...item,
        bookingDate: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
        count: 1,
      },
    ]);
  };

  const incrementItemCount = (property) => {
    setItems(() => {
      return items?.map((eachItem) =>
        eachItem.id === property.id
          ? { ...eachItem, count: eachItem.count + 1 }
          : { ...eachItem }
      );
    });
  };

  const decrementItemCount = (property) => {
    setItems(() => {
      return items?.map((eachItem) =>
        eachItem.id === property.id
          ? eachItem.count > 1
            ? { ...eachItem, count: eachItem.count - 1 }
            : { ...eachItem }
          : { ...eachItem }
      );
    });
  };

  const removeItem = (id) => {
    const updatedCartList = items?.filter((eachItem) => eachItem.id !== id);
    setItems([...updatedCartList]);
  };

  return [
    items,
    totalCharge,
    setItems,
    updateCartItems,
    incrementItemCount,
    decrementItemCount,
    removeItem,
    setTotalCharge
  ];
};

export default useCartItems;
