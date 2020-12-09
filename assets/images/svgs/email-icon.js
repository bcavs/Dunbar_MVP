import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={15} cy={15} r={15} fill="#F05E23" />
      <Path
        d="M22.2 8H7.8c-.99 0-1.791.787-1.791 1.75L6 20.25c0 .962.81 1.75 1.8 1.75h14.4c.99 0 1.8-.788 1.8-1.75V9.75C24 8.787 23.19 8 22.2 8zm-.36 3.719l-6.363 3.867a.932.932 0 01-.954 0L8.16 11.72a.759.759 0 01-.367-.465.723.723 0 01.093-.578.754.754 0 01.494-.334.785.785 0 01.59.117L15 14.125l6.03-3.666a.778.778 0 011.084.217.73.73 0 01-.274 1.043z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
