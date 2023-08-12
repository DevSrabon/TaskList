import { taskImg } from "../../const";

const Heading = ({ children }) => {
  return (
    <>
    <div className="flex  w-fit items-center">
    <img src={taskImg} alt="task list" className="h-10 w-10"/>
      <h1 className="text-3xl font-bold text-center text-[#ff9900]">{children}</h1>

    </div>
      <hr className="w-full divide-x my-1"/>
    </>
  );
};

export default Heading;
