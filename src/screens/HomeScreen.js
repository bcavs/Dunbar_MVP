// HomeScreen.js
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CustomButton from "../components/CustomButton";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { MapStyle } from "../styles";
import {
  getUserLocation,
  getReadableAddress,
  fetchFoursquareInfo,
  distanceFromFoursquareVenue,
} from "../helpers/mapHelpers";
import PinInformationCard from "../components/PinInformationCard";

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

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPlacedPin: {},
      userLocation: null,
      errorMessage: "",
      pinInformation: {
        venueName: "",
        venueAddress: "",
        readableAddress: "",
        longitude: null,
        latitude: null,
        isVenue: null,
      },
    };
  }

  componentDidMount() {
    /**
     * On component mount, get the users location from mapHelpers.js
     * then set the userLocation in state
     */
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

  /**
   * Adds a pin on the map for the user to view information about the location
   * @param {*} e
   */
  addMarker(e) {
    this.setState({ userPlacedPin: { latlng: e.nativeEvent.coordinate } });
    this.displayMarkerInfo(e);
  }

  displayMarkerInfo(e) {
    let lat = e.nativeEvent.coordinate.latitude;
    let lng = e.nativeEvent.coordinate.longitude;

    /**
     * Fetch venue information about the nearest venue using lat,lng
     */
    fetchFoursquareInfo(lat, lng).then((result) => {
      console.log(
        "Foursquare data:",
        result.data.response.venues[0].location.address
      );
      //Get a human readable address out of latlng
      getReadableAddress(lat, lng)
        .then((res) => {
          console.log("----> Readable Address: ", res[0].name);
          this.setState((prevState) => ({
            pinInformation: {
              ...prevState.pinInformation,
              venueName: result.data.response.venues[0].name,
              venueAddress: result.data.response.venues[0].location.address,
              latitude: lat,
              longitude: lng,
              readableAddress: res[0].name,
            },
          }));
        })
        /**
         * Check if the pin address matches the Foursquare nearest venue address
         * If it does then set the isVenue flag to true to tell the pinInformationCard to display all
         * Foursquare info
         */

        .then(() => {
          if (
            this.doAddressesMatch(
              this.state.pinInformation.readableAddress,
              this.state.pinInformation.venueAddress
            )
          ) {
            console.log("Matched!");
            this.setState((prevState) => ({
              pinInformation: {
                ...prevState.pinInformation,
                isVenue: true,
              },
            }));
          } else {
            console.log("No match...");
            this.setState((prevState) => ({
              pinInformation: {
                ...prevState.pinInformation,
                isVenue: false,
              },
            }));
          }
        });
    });
  }

  /**
   * Checks to see if the pin location's address matches the nearest Foursquare venue address
   * If not then we will not show details about the venue like images and name, we will
   * just show the address (so people can invite friends to a home or building that doesn't
   * have Foursquare info)
   */
  doAddressesMatch(address1, address2) {
    if (address1 === address2) return true;
    else false;
  }

  centerOnUser() {
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
        {this.state.pinInformation && this.state.pinInformation.latitude && (
          <PinInformationCard pinInformation={this.state.pinInformation} />
        )}
      </View>
    );
  }
}
