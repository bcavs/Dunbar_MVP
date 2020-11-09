import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Typography, Colors } from "../styles";

// Dunbar app buttons
/**
 * PROPS
 * @param text | Button text
 * @param press | onPress function
 * @param buttonStyle | Style the button container object
 * @param textStyle | Style the text inside the button
 *
 * @param primaryButton | Make a primary button (Orange BG w/ white text)
 * @param secondaryButton | Make a primary button (Light gray BG w/ black text)
 */

export default function CustomButton(props) {
  return (
    <Pressable
      onPress={props.press}
      style={[
        //General button styles
        styles.button,

        //Tiered styles
        props.primaryButton
          ? [Colors.background_primary, { ...styles.styledButton }]
          : null,

        props.secondaryButton
          ? [Colors.background_lightgrey, { ...styles.styledButton }]
          : null,

        //Component overrides
        { ...props.buttonStyle },
      ]}
    >
      <Text
        style={[
          //General text styles
          styles.text,

          //Tiered styles
          props.primaryButton ? Colors.text_white : null,
          props.secondaryButton ? "black" : null,

          //Text options
          props.bold ? { fontWeight: "bold" } : null,

          //Component overrides
          { ...props.textStyle },
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    //TODO: Add general styles that can apply to any and all buttons (or leave alone and only style specifically for style guide)
  },
  text: {
    //TODO: Add general styles that can apply to any and all buttons (or leave alone and only style specifically for style guide)
  },
  styledButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginHorizontal: 10,
    paddingVertical: 15,
  },
});
