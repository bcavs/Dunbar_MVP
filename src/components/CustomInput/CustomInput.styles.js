//! Made this component inline styles due to performanc issues with styled components in Formik

// import styled, { css } from "styled-components/native";
// import { Colors } from "../../styles";

// export const InputContainer = styled.View`
//   background-color: ${({ backgroundColor }) => backgroundColor};
//   width: 100%;
//   height: ${({ height }) => `${height}px`};
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin: ${({ verticalMargin, horizontalMargin }) =>
//     `${verticalMargin}px ${horizontalMargin}px`};
// `;

// export const StyledInput = styled.TextInput`
//   /* If there is an icon then add a horizontal padding equal to the width of the icon */
//   ${({ hasIcon }) =>
//     hasIcon &&
//     css`
//       padding: 0 50px;
//     `}

//   width: 100%;
//   height: 100%;
//   font-size: 16px;
//   border-width:  ${({focused}) => focused ? "2px" : "1px"};
//   border-radius: 5px;
//   border-color: ${({focused}) => focused ? Colors.primary : "#D3D3D3"};
// `;

// export const IconContainer = styled.View`
//   height: 50px;
//   width: 50px;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;

//   /* Position left or right based on props */
//   ${({ left }) =>
//     left &&
//     css`
//       left: 0;
//     `}

//   ${({ right }) =>
//     right &&
//     css`
//       right: 0;
//     `}
// `;

// export const ErrorText = styled.Text`
//   background-color: red;
//   color:black;
// `