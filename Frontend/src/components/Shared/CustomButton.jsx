const CustomButton = ({ children, type="button", style = "primary", ...props }) => {
  const buttonStyles = style === "primary" ? "py-2 px-4 w-full" : "py-0.5 px-1 text-sm";

  return (
    <button
      className={`inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-700 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none  transition-all text-sm ${buttonStyles}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
