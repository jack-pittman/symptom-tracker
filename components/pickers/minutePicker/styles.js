// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/colors.js';

const styles = StyleSheet.create({ 
    minute: {
        // backgroundColor: 'red',
        color: 'blue',
    },
    minutePicker: { 
        height: 50, 
        width: 100, 
        color: 'blue', 
        placeholderTextColor: 'red', 
    },
    minuteItem: {
        color: Colors.darkGray, fontFamily: "Futura", fontSize: 18, fontWeight: 'bold'
    }
});
export default styles;
