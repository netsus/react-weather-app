import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
      iconName: "md-partly-sunny-sharp",
      gradient: ["#ee9ca7","#ffdde1"]
    },
    Thunderstorm: {
      iconName: "md-thunderstorm",
      gradient: []
    },
    Drizzle: {
      iconName: "rainy-sharp",
      gradient: []
    },
    Rain: {
      iconName: "umbrella-sharp",
      gradient: []
    },
    Snow: {
      iconName: "ios-snow",
      gradient: []
    },
    Atmosphere: {
      iconName: "ios-sunny-sharp",
      gradient: []
    },
    Clear: {
      iconName: "ios-sunny-sharp",
      gradient: []
    },
    Clouds: {
      iconName: "md-cloud",
      gradient: []
    },
    Mist: {
      iconName: "water",
      gradient: []
    },
    Dust: {
      iconName: "apps",
      gradient: []
    }
  };

export default function Weather({ temp, condition }){
    return (
    <LinearGradient
    colors={weatherOptions["Haze"].gradient}
    style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <Ionicons 
                size={96}
                name={weatherOptions["Haze"].iconName}
                color="white" />
            <Text style={styles.temp} >{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}>
            
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightskyblue"
    },
    temp: {

        fontSize:36,
        color: "white"
    },
    halfContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
