import { Heading, List, useListContext } from "../../const";

const Lists = () => {
  const { listItems } = useListContext();
  const reversedListItems = [...listItems].reverse();
  return (
    <section>
      <Heading>Lists Of Items : {listItems.length }</Heading>
      {/* Reverse the listItems array for show the latest list first */}
      {reversedListItems.map((item, index) => (
        <List key={index} item={item} index={index} />
      ))}
    </section>
  );
};

export default Lists;
