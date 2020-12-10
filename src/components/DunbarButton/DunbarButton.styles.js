import styled, { css } from "styled-components/native";
import { Colors } from "../../styles";

export const ButtonView = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ height }) => `${height}px`};
  justify-content: center;
  margin: ${({ verticalMargin, horizontalMargin }) =>
    `${verticalMargin}px ${horizontalMargin}px`};
  align-items: center;
`;

export const ButtonPressable = styled.Pressable`
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50px;
  border-width: 1px;
  flex-direction: row;
  /* If there is an icon then add a horizontal padding equal to the width of the icon */
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding: 0 50px;
    `}

  /* If the button is set to primary then make the background and border the primary color */
  background-color: ${({ isPrimary, backgroundColor }) =>
    isPrimary ? Colors.primary : backgroundColor};

  border-color: ${({ isPrimary, borderColor }) =>
    isPrimary ? Colors.primary : borderColor};
`;

export const ButtonText = styled.Text`
  font-weight: ${({ weight }) => weight};

  /* If primary button then set text color to white, else set to defined color */
  color: ${({ isPrimary, color }) => (isPrimary ? "white" : color)};
`;

export const IconContainer = styled.View`
  height: 50px;
  width: 50px;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 10px;

  /* Position left or right based on props */
  ${({ left }) =>
    left &&
    css`
      left: 0;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}
`;
