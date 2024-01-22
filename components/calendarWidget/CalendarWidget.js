import { StyleSheet, Text, View, Image} from "react-native";

import styles from './styles.js';


export default function CalendarWidget() {
    return (
        <View style={styles.horizontalFlex}>
            <View style={styles.leftSide}>
                <View style={styles.dotArray}>
   
                    <View style={styles.dotStack}>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.redDot}></View>
                        <View style={styles.inactiveDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.purpleDot}></View>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.purpleDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.redDot}></View>
                        <View style={styles.inactiveDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.purpleDot}></View>
                        <View style={styles.redDot}></View>
                        <View style={styles.inactiveDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.redDot}></View>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.yellowDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.hiddenDot}></View>
                    </View>
                    <View style={styles.dotStack}>
                        <View style={styles.purpleDot}></View>
                        <View style={styles.inactiveDot}></View>
                        <View style={styles.hiddenDot}></View>
                    </View>
                </View>
            </View>

            <View style={styles.rightSide}>
                <Text style={styles.smallMonthText}>JAN</Text>
                <Text style={styles.bigDateText}>8</Text>
            </View>
        </View>
    )
}
