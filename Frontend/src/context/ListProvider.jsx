import { createContext, useCallback, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);

  // useCallback-> memorize click handler function and minimizing unnecessary re-renders

  const handleAddToList = useCallback((newListItem) => {
    // Set the 'completed' property to false for new items
    const newItem = { ...newListItem, completed: false };
    setListItems([...listItems, newItem]);
  }, [listItems]);

  const handleUpdateItem = useCallback(
    (index, updatedItem) => {
      // -> copy listItems
      const updatedListItems = [...listItems];

      //-> dynamically change the value by index
      updatedListItems[index] = updatedItem;

      // ->set updatedListItems into setListItems
      setListItems(updatedListItems);
    },
    [listItems]
  );

  const onDeleteItem = useCallback(
    (index) => {
      // -> calculate the original index before reversing the array
      const originalIndex = listItems.length - 1 - index;

      //  -> filter list-item index and delete-item index
      const deletedListItems = listItems.filter((_, i) => i !== originalIndex);

      // ->set deletedListItems into setListItems
      setListItems(deletedListItems);
    },
    [listItems]
  );

  return (
    <ListContext.Provider
      value={{
        listItems,
        handleAddToList,
        handleUpdateItem,
        onDeleteItem,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
