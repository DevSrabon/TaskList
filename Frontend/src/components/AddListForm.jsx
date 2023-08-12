import { useState } from "react";
import { CustomButton, Error, Heading, Label } from "../const/index";
import { input } from "../const/style";

const AddListForm = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
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

    if (!date) {
      newErrors.date = "Date is Required";
    }

    // Set the new errors state if any errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }
  };

  return (
    <>
      <header>
        {/* Custom Heading */}
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
            {/* Validation Error */}
            {errors.name && <Error error={errors.name} />}
          </div>
          <div className="mb-6">
            {/* Custom Label */}
            <Label htmlFor="description">Description</Label>
            <textarea
              className={input}
              placeholder="Description"
              id="description"
            />
            {/* Validation Error */}
            {errors.description && <Error error={errors.description} />}
          </div>
          <div className="mb-6">
            {/* Custom Label */}
            <Label htmlFor="date">Date</Label>
            <input className={input} id="date" type="date" />
            {/* Validation Error */}
            {errors.date && <Error error={errors.date} />}
          </div>

          <div className="flex items-center justify-between">
            {/* Custom Button */}
            <CustomButton type={"submit"}>Add To List</CustomButton>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddListForm;
