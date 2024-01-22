import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

import { router, useRouter } from 'expo-router';

import dataStore from '../../app/database'; // Import the dataStore


export default function SaveSymptomButton({ buttonText, textColor, buttonBackground, destination, sCategory, sTime, sDate}) {
    
    const router = useRouter();

    const styles = StyleSheet.create({
        actionButton: {
            padding: 25,
            borderRadius: 20,
            backgroundColor: buttonBackground || '#000000', // Set your default color
            marginRight: 40, 
            marginLeft: 40,
            marginTop: 10,
        },
        buttonText: {
            fontFamily: 'Arial',
            fontSize: 25,
            textAlign: 'center',
            color: textColor || '#347F7F',
            fontWeight: 'bold',
        }
    });

    function saveSymptom() {

        const newEntry = {
            category: sCategory,
            startTime: sTime,
            startDate: sDate,
        };

        dataStore.symptomData.push({ category: sCategory, startDate: sTime, startTime: sDate });
        // RETRIEVE AND MODIFY DATA.JSON

        console.log("symptom saved!!!!");
        console.log("Category: " + sCategory);
        console.log("sTime: " + sTime);
        console.log("sDate: " + sDate);
    }

    return (
        <TouchableOpacity 
            style={styles.actionButton} 
            activeOpacity={0.7}
            onPress={() => {
                router.push(destination)
                saveSymptom()
            }}
        >
            <Text style={styles.buttonText}>{ buttonText }</Text>

        </TouchableOpacity>
    )
}
