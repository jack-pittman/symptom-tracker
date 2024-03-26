import { StyleSheet, Text, View, Image} from "react-native";

import styles from './styles.js';


export default function TrophyCabinet() {
    return (
        <View style={styles.horizontalFlex}>
            <View style={styles.leftSide}>
                <View style={styles.trophyArray}>
   
                    <Image source={require('../../assets/icons/bronze.png')} style={styles.trophyIcon} />
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
