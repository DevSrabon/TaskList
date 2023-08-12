import { CustomButton, Heading } from "../const";

const Lists = () => {
  return (
    <section>
      <Heading>Lists Of Items</Heading>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">List Item Title</h2>
        <p className="text-gray-600 mb-2">
          This is a description of the list item. It can be as long as you need
          it to be.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Date: 2023-08-10</span>
          <CustomButton style="territory">Edit</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Lists;
