import { StyleSheet, Text, View, Image} from "react-native";
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles.js';

import SymptomCount from "./SymptomCount.js";



export default function TrophyCabinet() {

    useEffect(() => {
        // This code will run when the component mounts or updates
        symptomCountTrophyRender(); // Call the function initially
    }, []); // Empty dependency array ensures this effect runs only once on mount


    function symptomCountTrophyRender() {
        var bronzeMileStone = 5; 
        
        if (SymptomCount() > bronzeMileStone) {
            return "bronze";
            console.log("bronze");
        }

        else {
            return "blank";
        }
    }

    var trophyType = symptomCountTrophyRender();

    const trophyImages = {
        bronze: require('../../assets/icons/bronze.png'),
        blank: require('../../assets/icons/blank.png'),
        // Add other trophy types as needed
    };

    return (
        <View style={styles.horizontalFlex}>
            <View style={styles.leftSide}>
                <View style={styles.trophyArray}>
   
                    <Image source={trophyImages[trophyType]} style={styles.trophyIcon} />
                    <Image source={require('../../assets/icons/blank.png')} style={styles.trophyIcon} />
                    <Image source={require('../../assets/icons/blank.png')} style={styles.trophyIcon} />

                </View>
            </View>

            <View style={styles.rightSide}>
                <Text style={styles.smallMonthText}>JAN</Text>
                <Text style={styles.bigDateText}>8</Text>
            </View>
        </View>
    )
}
