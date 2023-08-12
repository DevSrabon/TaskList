const DeleteIcon = ({ width = 24, height = 24, color = "#EF4444", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
    >
      <path
        d="M3 6H5H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 6V5C8.5 4.17157 9.17157 3.5 10 3.5H14C14.8284 3.5 15.5 4.17157 15.5 5V6M18.5 6V18C18.5 19.6569 17.1569 21 15.5 21H8.5C6.84315 21 5.5 19.6569 5.5 18V6H18.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9H9.01M13 9H13.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
