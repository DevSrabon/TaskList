const CustomButton = ({ children, type="button", style = "primary", ...props }) => {
  const buttonStyles = style === "primary" ? "py-2 px-4 w-full" : "py-1 px-2";

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline ${buttonStyles}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
