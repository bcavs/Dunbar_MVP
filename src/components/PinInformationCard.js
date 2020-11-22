import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Spacing, Typography, Colors } from "../styles";
import CustomButton from "../components/CustomButton";

function DebugConsole(props) {
  const debug__styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      height: 100,
      width: "100%",
      color: "#fff",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      textAlign: "right",
    },
    venueText: {
      color: "green",
    },
    nonVenueText: {
      color: "red",
    },
  });
  if (props.pinInformation.isVenue) {
    return (
      <View style={debug__styles.container} pointerEvents="none">
        <Text style={debug__styles.venueText}>
          {props?.pinInformation?.venueName}
        </Text>
        <Text style={debug__styles.venueText}>
          {props?.pinInformation?.readableAddress}
        </Text>
        <Text style={debug__styles.venueText}>
          {props?.pinInformation?.longitude}
        </Text>
        <Text style={debug__styles.venueText}>
          {props?.pinInformation?.latitude}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={debug__styles.container} pointerEvents="none">
        <Text style={debug__styles.nonVenueText}>
          {props?.pinInformation?.readableAddress}
        </Text>
        <Text style={debug__styles.nonVenueText}>
          {props?.pinInformation?.longitude}
        </Text>
        <Text style={debug__styles.nonVenueText}>
          {props?.pinInformation?.latitude}
        </Text>
      </View>
    );
  }
}

function VenueInformationDrawer(props) {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      color: "#fff",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "white",
      paddingVertical: 20,
    },
    drawerHeaderText: {
      fontSize: 240,
      fontWeight: "bold",
    },
    actionItemsContainer: {
      // backgroundColor: "red",
      height: 50,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
  });
  return (
    <View style={[Spacing.global_horizontal_padding, styles.container]}>
      <Text style={styles.drawerHeaderText}>
        {props.pinInformation.venueName}
      </Text>
      <Text style={[Colors.text_darkgray]}>
        {props.pinInformation.readableAddress}
      </Text>
      <View style={styles.actionItemsContainer}>
        <CustomButton
          text={"Invite Friends"}
          primaryButton
          buttonStyle={{
            paddingHorizontal: 25,
            width: 175,
          }}
          textStyle={{
            fontSize: 14,
            fontWeight: "bold",
          }}
          press={() => {
            console.log("Pressed");
          }}
        />
      </View>
    </View>
  );
}

function AddressInformationDrawer(props) {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      color: "#fff",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "white",
      paddingVertical: 20,
    },
    drawerHeaderText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    actionItemsContainer: {
      // backgroundColor: "red",
      height: 50,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
  });
  return (
    <View style={[Spacing.global_horizontal_padding, styles.container]}>
      <Text style={styles.drawerHeaderText}>
        {props.pinInformation.readableAddress}
      </Text>
      <Text style={[Colors.text_darkgray]}>subtext goes here...</Text>
      <View style={styles.actionItemsContainer}>
        <CustomButton
          text={"Invite Friends"}
          primaryButton
          buttonStyle={{
            paddingHorizontal: 25,
            width: 175,
          }}
          textStyle={{
            fontWeight: "bold",
          }}
          press={() => {
            console.log("Pressed");
          }}
        />
      </View>
    </View>
  );
}

/**
 * Checks whether the pin sent is a venue or a regular address then renders the information
 * accordingly
 * @param {*} props
 */

export default function PinInformationCard(props) {
  // console.log("Pin Info Props: ", props);
  if (props.pinInformation.isVenue) {
    return (
      <>
        <DebugConsole {...props} />
        <VenueInformationDrawer {...props} />
      </>
    );
  } else {
    return (
      <>
        <DebugConsole {...props} />
        <AddressInformationDrawer {...props} />
      </>
    );
  }
}
