import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
      iconName: "md-partly-sunny-sharp",
      gradient: ["#ee9ca7","#ffdde1"],
      title:"Haze",
      subtitle:""
    },
    Thunderstorm: {
      iconName: "md-thunderstorm",
      gradient: ["#1D2B64","#0052D4"],
      title:"Thunderstorm",
      subtitle:""
    },
    Drizzle: {
      iconName: "rainy-sharp",
      gradient: ["#9CECFB","#65C7F7","#0052D4"],
      title:"이슬비",
      subtitle:"예기치 않게 적당히 내리는 비"
    },
    Rain: {
      iconName: "umbrella-sharp",
      gradient: ["#2c3e50","#3498db"],
      title:"Rain",
      subtitle:""
    },
    Snow: {
      iconName: "ios-snow",
      gradient: ["#E0EAFC","#1D2B64"],
      title:"Snow",
      subtitle:""
    },
    Atmosphere: {
      iconName: "ios-sunny-sharp",
      gradient: ["#83a4d4","#b6fbff"],
      title:"Atmosphere",
      subtitle:""
    },
    Clear: {
      iconName: "ios-sunny-sharp",
      gradient: ["#6DD5FA","#fffc00","#E0EAFC"],
      title:"Clear",
      subtitle:""
    },
    Clouds: {
      iconName: "md-cloud",
      gradient: ["#56CCF2","#E0EAFC","#2F80ED"],
      title:"Clouds",
      subtitle:""
    },
    Mist: {
      iconName: "water",
      gradient: ["#F8CDDA", "#1D2B64"],
      title:"Mist",
      subtitle:""
    },
    Dust: {
      iconName: "apps",
      gradient: ["#304352","#d7d2cc"],
      title:"Dust",
      subtitle:""
    }
  };

export default function Weather({ temp, condition }){
    const weather = "Clouds"
    return (
    <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <Ionicons 
                size={96}
                name={weatherOptions[condition].iconName}
                color="white" />
            <Text style={styles.temp} >{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }} >
            <Text style={styles.title} >{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle }>{weatherOptions[condition].subtitle}</Text>
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
    },
    title: {
      color: "white",
      fontWeight : "300",
      fontSize: 44,
      marginBottom: 15
    },
    subtitle:{
      color: "white",
      fontWeight : "600",
      fontSize: 24
    },
    textContainer: {
    }
});
