/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useState } from "react";
import {
  CustomButton,
  CustomTextArea,
  Error,
  Heading,
  Label,
  useListContext,
} from "../../const/index";
import { input } from "../../const/style";

const AddListForm = () => {
  const [errors, setErrors] = useState({});
  const { handleAddToList , setIsCompleted} = useListContext();
  // useCallback- memorize handleSubmit fnc and minimizing unnecessary re-renders
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title?.value;
      const description = form.description?.value;
      const date = form.date?.value;

      let newErrors = {};

      if (!title) {
        newErrors.name = "Name is Required";
      }

      if (!description) {
        newErrors.description = "Description is Required";
      }

      // Set the new errors state if any errors exist
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      } else {
        // If no errors, reset errors and call the onAddToList function
        setErrors({});
        handleAddToList({ title, description, date });
        form.reset();
      }
    },
    [handleAddToList]
  );

  return (
    <>
      <header>
        <Heading>Task Application</Heading>
      </header>
      <section>
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            {/* Custom Label */}
            <Label htmlFor="title">Title</Label>
            <input
              className={input}
              id="title"
              type="text"
              placeholder="Title"
            />
            {/* if any error show custom error */}
            {errors.name && <Error error={errors.name} />}
          </div>
          <div className="mb-6">
            {/* Custom Label */}
            <Label htmlFor="description">Description</Label>
            {/* custom text area */}
            <CustomTextArea
              className={input}
              placeholder="Description"
              id="description"
            />
            {/* if any error show custom error */}
            {errors.description && <Error error={errors.description} />}
          </div>
          <div className="mb-6">
            {/* Custom Label */}
            <Label htmlFor="date">Date</Label>
            <input
              className={input}
              id="date"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />{" "}
            {/* Take the first element after split by "T" from new date() */}
          </div>

          <div className="flex items-center justify-between">
            <CustomButton type={"submit"}>Add To List</CustomButton>
          </div>
        </form>
      </section>
    </>
  );
};

export default React.memo(AddListForm);
