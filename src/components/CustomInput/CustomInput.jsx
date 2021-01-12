import React, { useState, StyleSheet } from "react";
import { View, Text, TextInput } from "react-native";
import { Colors } from "../../styles";
import PropTypes from "prop-types";
// import { InputContainer, StyledInput, IconContainer, ErrorText } from "./CustomInput.styles";

const CustomInput = ({
  containerBackgroundColor,
  containerHeight,
  containerMarginVertical,
  containerMarginHorizontal,

  error,
  labelText,
  touched,
  name,
  placeholder,
  value,
  handleChange,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  setFieldTouched,

  leftIcon,
  rightIcon,
}) => {
  const [focused, setFocused] = useState(false)
  return (
    <View
      verticalMargin={containerMarginVertical}
      horizontalMargin={containerMarginHorizontal}
      style={{
        backgroundColor: containerBackgroundColor,
        width: "100%",
        height: containerHeight,
        justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: containerMarginHorizontal,
        marginVertical: containerMarginVertical
      }}
    >
      {labelText &&
        <Text style={{
          fontWeight: "bold",
          color: "#7c7c7c"
        }}>
          {labelText}
        </Text>
      }
      <View>
        {/* Render left icon is passed in */}
        {leftIcon &&

          <View left
            style={{
              height: 50,
              width: 50,
              position: 'absolute',
              justifyContent: ' center',
              alignItems: 'center',
              padding: 10,
              left: 0
            }}
          >{leftIcon}</View>}
        <TextInput
          name={name}
          placeholder={placeholder}
          value={value}
          touched={touched}
          onChangeText={handleChange}
          hasIcon={rightIcon || leftIcon}
          onFocus={() => {setFocused(true); setFieldTouched(name, false)}}
          onBlur={() => {setFocused(false); setFieldTouched(name)}}
          focused={focused}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}

          style={{
            width: '100%',
            height: '100%',
            fontSize: 16,
            paddingHorizontal: 50,
            borderWidth: focused ? 2 : 1,
            borderRadius: 5,
            borderColor: focused ? Colors.primary : "#D3D3D3"
          }}
        />
        {/* Render right icon is passed in */}

        {rightIcon && <IconContainer right
          style={{
            height: 50,
            width: 50,
            position: 'absolute',
            justifyContent: ' center',
            alignItems: 'center',
            padding: 10,
            right: 0
          }}
        >{rightIcon}</IconContainer>}
      </View>
        {touched && error && <Text>{error}</Text>}
    </View>
  );
}

CustomInput.propTypes = {
  // Input Container props
  containerBackgroundColor: PropTypes.string,
  containerHeight: PropTypes.number,
  containerMarginVertical: PropTypes.number,
  containerMarginHorizontal: PropTypes.number,

  // Label props
  labelText: PropTypes.string,

  // Input props
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  inputBorderColor: PropTypes.string,

  error: PropTypes.string,
  touched: PropTypes.bool

};

CustomInput.defaultProps = {
  // Input Container props
  containerBackgroundColor: "#fff",
  containerHeight: 50,
  containerMarginVertical: 10,
  containerMarginHorizontal: 0,

  secureTextEntry: false,
  autoCapitalize: "none",

  error: null,
  touched: false
};

export default CustomInput;
