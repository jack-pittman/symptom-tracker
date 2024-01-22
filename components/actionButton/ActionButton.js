import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
// import { router } from '../../app/router.js'; // Adjust the path based on your project structure
import { router, useRouter } from 'expo-router';




export default function ActionButton({ buttonText, textColor, buttonBackground, destination}) {
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

    const router = useRouter();

    return (
        <TouchableOpacity 
            style={styles.actionButton} 
            activeOpacity={0.7}
            onPress={() => router.push(destination)}
        >
            <Text style={styles.buttonText}>{ buttonText }</Text>

        </TouchableOpacity>
    )
}
