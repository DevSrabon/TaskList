const Heading = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">{children}</h1>
      <hr className="w-full divide-x my-1"/>
    </>
  );
};

export default Heading;
