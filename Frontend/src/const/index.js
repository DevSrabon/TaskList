import { useContext } from "react";
import AddListForm from "../components/AddListForm/AddListForm";
import List from "../components/ListItems/List";
import Lists from "../components/ListItems/Lists";
import Container from "../components/Shared/Container";
import CustomButton from "../components/Shared/CustomButton";
import CustomTextArea from "../components/Shared/CustomTextArea";
import DeleteSvg from "../components/Shared/DeleteSvg";
import Error from "../components/Shared/Error";
import Heading from "../components/Shared/Heading";
import Label from "../components/Shared/Label";
import { ListContext } from "../context/ListProvider";
import taskImg from "../assets/task.png";

const useListContext = () => useContext(ListContext);
export {
  AddListForm,
  Container,
  CustomButton,
  CustomTextArea,
  DeleteSvg,
  Error,
  Heading,
  Label,
  List,
  Lists,
  useListContext,
  taskImg,
};
