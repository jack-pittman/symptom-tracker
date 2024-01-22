// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/colors.js';

const styles = StyleSheet.create({ 
    hourPickerContainer: {
        // backgroundColor: 'red',
        color: 'blue',
    },
    hourPicker: { 
        height: 50, 
        width: 100, 
        color: 'blue', 
        placeholderTextColor: 'red', 
    },
    hourItem: {
        color: Colors.darkGray, fontFamily: "Futura", fontSize: 18, fontWeight: 'bold'
    }
});
export default styles;
