import React, { useEffect, useRef, useState } from "react";
import { CustomButton, CustomTextArea, useListContext } from "../../const";

const List = ({ item, index }) => {
  const { listItems, handleUpdateItem, onDeleteItem } = useListContext();
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedDescription, setEditedDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(item.completed);

  const focusRef = useRef(null);

  const handleEdit = (index, initialDescription) => {
    setEditingIndex(index); //->set edit index
    setEditedDescription(initialDescription); //-> set initialDescription
  };

  const handleSave = (index) => {
     // -> Calculate the original index before reversing the array
    const originalIndex = listItems.length - 1 - index;

    handleUpdateItem(originalIndex, {
      ...listItems[originalIndex],
      description: editedDescription,
      //-> update description by index
    });

    setEditingIndex(-1);
  };

  const handleInputChange = (event) => {
    setEditedDescription(event.target.value); //-> set value
  };

  const handleCompleteToggle = () => {
    // ->Only toggle the completion status if the item is not being edited
    if (editingIndex === -1) {
      setIsCompleted((prev) => !prev);
      if (!isCompleted) {
        //-> Only update the completion status if it's marked as not completed
        handleUpdateItem(index, {
          ...item,
          completed: !item.completed,

        });
      }
    }
  };

  useEffect(() => {
    if (editingIndex !== -1) {
      // -> Focus the textarea when entering edit mode
      focusRef.current.focus();
    }
  }, [editingIndex]);

  return (
    <div
      key={index}
      className={`bg-white shadow-md rounded p-4 mb-4 ${
        isCompleted ? "bg-green-100 " : ""
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-2 ${
          isCompleted ? "line-through" : ""
        }`}
      >
        {item.title}
      </h2>

      {/* => if editingIndex equal listItems index show the textarea else show description */}
      {editingIndex === index ? (
        <CustomTextArea
          value={editedDescription}
          onChange={handleInputChange}
          ref={focusRef}
        />
      ) : (
        <p
          className={`text-gray-600 mb-2 ${isCompleted ? "line-through" : ""}`}
        >
          {item.description}
        </p>
      )}
      <div className="flex items-center justify-around">
        <span className="text-gray-400 text-sm">Date: {item.date}</span>
        <div className="flex gap-2">
          {/* if editingIndex equal to listItems index show the save and cancel btn else show the edit delete btn*/}
          {editingIndex === index ? (
            <div className="flex gap-2">
              <CustomButton onClick={() => handleSave(index)} style="territory">
                Save
              </CustomButton>
              <CustomButton
                onClick={() => setEditingIndex(-1)}
                style="territory"
              >
                Cancel
              </CustomButton>
            </div>
          ) : (
            <div className="flex gap-2">
              <CustomButton
                onClick={() => handleEdit(index, item.description)}
                style="territory"
              >
                Edit
              </CustomButton>
              <CustomButton
                onClick={() => onDeleteItem(index)}
                style="territory"
              >
                Delete
              </CustomButton>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500 h-4 w-4"
                  checked={isCompleted}
                  tabIndex={index}
                  onChange={() => handleCompleteToggle(index)}
                />
                <span
                  className={`text-sm ${
                    isCompleted ? "line-through text-gray-600" : ""
                  }`}
                >
                  {isCompleted ? "Completed" : "Not Completed"}
                </span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
