// HomeScreen.js
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CustomButton from "../components/CustomButton";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { MapStyle } from "../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapView: {
    flex: 1,
    backgroundColor: "red",

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (e) => reject(e)
    );
  });
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { userPlacedPin: {}, userLocation: null, errorMessage: "" };
  }

  componentDidMount() {
    return getUserLocation().then((position) => {
      if (position) {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }
    });
  }

  addMarker(e) {
    console.log(e.nativeEvent.coordinate);
    this.setState({ userPlacedPin: { latlng: e.nativeEvent.coordinate } });
    console.log("Set: ", this.state.userPlacedPin);
  }

  centerOnUser() {
    console.log("HomeScreen -> centerOnUser ->  navigator", navigator);

    getUserLocation().then((position) => {
      if (position) {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }
      this.mapView.animateToRegion(this.state.userLocation);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          initialRegion={this.state.userLocation}
          ref={(ref) => (this.mapView = ref)}
          showsUserLocation
          onPress={(e) => this.addMarker(e)}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={MapStyle.generatedStyles}
        >
          {this.state.userPlacedPin.latlng && (
            <Marker key={1} coordinate={this.state.userPlacedPin.latlng} />
          )}
        </MapView>

        <Text>{this.state.errorMessage}</Text>
        <CustomButton
          press={() => this.centerOnUser()}
          text={
            <MaterialIcons name="location-searching" size={24} color="black" />
          }
          buttonStyle={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: 5,
            backgroundColor: "white",
            borderRadius: 50,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        />
      </View>
    );
  }
}
