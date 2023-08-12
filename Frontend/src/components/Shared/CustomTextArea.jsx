import React from "react";
import { input } from "../../const/style";

// eslint-disable-next-line react/display-name
const CustomTextArea = React.forwardRef((props, ref) => {
  return <textarea ref={ref} className={input} {...props} />;
});

export default CustomTextArea;
