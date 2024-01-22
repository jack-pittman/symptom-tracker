// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/colors.js';

const styles = StyleSheet.create({ 
    monthPickerContainer: {
        // backgroundColor: 'red',
        color: 'blue',
    },
    dayPicker: { 
        height: 50, 
        width: 90, 
        color: 'blue', 
        placeholderTextColor: 'red', 
    },
    dayItem: {
        color: Colors.darkGray, fontFamily: "Futura", fontSize: 18, fontWeight: 'bold'
    }
});
export default styles;
