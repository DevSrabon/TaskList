import { taskImg } from "../../const";

const Heading = ({ children }) => {
  return (
    <>
      <div className="flex items-center w-fit animate-bounce">
        <img src={taskImg} alt="task list" className="h-10 max-w-[40px] w-full" />
        <h1 className="text-lg md:text-3xl font-bold text-center text-[#ff9900]">
          {children}
        </h1>
      </div>
      <hr className="w-full divide-x my-1" />
    </>
  );
};

export default Heading;
