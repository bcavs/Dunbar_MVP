import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonView, ButtonPressable, ButtonText, IconContainer } from './DunbarButton.styles';

/**
 * Custom component to handle most (if not all) buttons in the Dunbar app
 */

const DunbarButton = ({
  containerBackgroundColor,
  containerHeight,
  containerMarginVertical,
  containerMarginHorizontal,

  onPress,
  buttonBackgroundColor,
  buttonBorderColor,
  buttonWidth,
  buttonHeight,

  text,
  textColor,
  fontWeight,
  rightIcon,
  leftIcon,
  primary
}) => (
    <>
      <ButtonView
        backgroundColor={containerBackgroundColor}
        height={containerHeight}
        verticalMargin={containerMarginVertical}
        horizontalMargin={containerMarginHorizontal}
      >
        <ButtonPressable
          onPress={onPress}
          backgroundColor={buttonBackgroundColor}
          borderColor={buttonBorderColor}
          hasIcon={rightIcon || leftIcon}
          isPrimary={primary}
          width={buttonWidth}
          height={buttonHeight}
        >
          {/* Render left icon is passed in */}
          {leftIcon &&
            <IconContainer left>
              {leftIcon}
            </IconContainer>}

          <ButtonText
            color={textColor}
            weight={fontWeight}
            isPrimary={primary}
          >
            {text}
          </ButtonText>

          {/* Render right icon is passed in */}
          {rightIcon &&
            <IconContainer right>
              {rightIcon}
            </IconContainer>}

        </ButtonPressable>
      </ButtonView>
    </>
  );
DunbarButton.propTypes = {
  // General props
  primary: PropTypes.bool,
  // Button Container props
  containerBackgroundColor: PropTypes.string,
  containerHeight: PropTypes.number,
  containerMarginVertical: PropTypes.number,
  containerMarginHorizontal: PropTypes.number,
  // Button Pressable props
  onPress: PropTypes.func.isRequired,
  buttonBackgroundColor: PropTypes.string,
  buttonBorderColor: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonHeight: PropTypes.string,
  //Button Text props
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(["bold", "normal"]),
  //Button Icon props
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
};
DunbarButton.defaultProps = {
  // General props
  primary: null,
  // Button Container props
  containerBackgroundColor: "#fff",
  containerHeight: 50,
  containerMarginVertical: 10,
  containerMarginHorizontal: 0,
  // Button Pressable props
  buttonBackgroundColor: "#fff",
  buttonBorderColor: "#dfdfdf",
  buttonWidth: "100%",
  buttonHeight: "100%",
  //Button Text props
  textColor: "#000",
  fontWeight: "bold",
  //Button icon props
  rightIcon: null,
  leftIcon: null
};
export default DunbarButton;