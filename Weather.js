import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function Weather({ temp }){
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <Ionicons size={96} name="rainy" />
            <Text style={styles.temp} >{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}>
            
        </View>
    </View>
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

        fontSize:36
    },
    halfContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
