import { StyleSheet, Text, View, Image} from "react-native";
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles.js';

import SymptomCount from "../trophyCabinet/SymptomCount.js";
import trophyImages from "../trophyCabinet/TrophyImages.js";
import trophyAlerts from "../trophyCabinet/TrophyAlerts.js";



export default function TrophyAlert() {

    useEffect(() => {
        // This code will run when the component mounts or updates
        symptomCountTrophyRender(); // Call the function initially
    }, []); // Empty dependency array ensures this effect runs only once on mount


    function symptomCountTrophyRender() {
        var bronzeMileStone = 1; 
        
        if (SymptomCount() == bronzeMileStone + 1) {
            return "bronze";
            console.log("bronze");
        }

        var silverMileStone = 2; 
        
        if (SymptomCount() == silverMileStone + 1) {
            return "silver";
            console.log("silver");
        }

        var goldMileStone = 3; 
        
        if (SymptomCount() == goldMileStone + 1) {
            return "gold";
            console.log("gold");
        }

        else {
            return "blank";
        }
    }

    var trophyType = symptomCountTrophyRender();

    return (
        <View style={styles.alertContainer}>

            <View style={styles.iconContainer}>
                <Image source={trophyImages[trophyType]} style={styles.trophyIcon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.alertText}>{trophyAlerts[trophyType]}</Text>
            </View>
        </View>
    )
}
