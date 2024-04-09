import { StyleSheet, Text, View, Image} from "react-native";
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles.js';

import SymptomCount from "./SymptomCount.js";
import trophyImages from "./TrophyImages.js";


export default function TrophyCabinet() {

    useEffect(() => {
        // This code will run when the component mounts or updates
        symptomCountTrophyRender(); // Call the function initially
    }, []); // Empty dependency array ensures this effect runs only once on mount


    function symptomCountTrophyRender(index) {
        var bronzeMileStone = 1; 
        
        if (SymptomCount() > bronzeMileStone && index == 0) {
            return "bronze";
            console.log("bronze");
        }

        var silverMileStone = 2; 
        
        if (SymptomCount() > silverMileStone && index == 1) {
            return "silver";
            console.log("silver");
        }

        var goldMileStone = 3; 
        
        if (SymptomCount() > goldMileStone && index == 2) {
            return "gold";
            console.log("gold");
        }

        else {
            return "blank";
        }
    }

    var trophyType0 = symptomCountTrophyRender(0);
    var trophyType1 = symptomCountTrophyRender(1);
    var trophyType2 = symptomCountTrophyRender(2);

    var dayVariable = SymptomCount()-1;


    return (
        <View style={styles.horizontalFlex}>
            <View style={styles.leftSide}>
                <View style={styles.trophyArray}>
   
                    <Image source={trophyImages[trophyType0]} style={styles.trophyIcon} />
                    <Image source={trophyImages[trophyType1]} style={styles.trophyIcon} />
                    <Image source={trophyImages[trophyType2]} style={styles.trophyIcon} />

                </View>
            </View>

            <View style={styles.rightSide}>
                <Text style={styles.smallMonthText}>TOTAL</Text>
                <Text style={styles.bigDateText}>{dayVariable}</Text>
            </View>
        </View>
    )
}
