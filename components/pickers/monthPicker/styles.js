// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/colors.js';

const styles = StyleSheet.create({ 
    monthPickerContainer: {
        // backgroundColor: 'red',
        color: 'blue',
    },
    monthPicker: { 
        height: 50, 
        width: 150, 
        color: 'blue', 
        placeholderTextColor: 'red', 
    },
});
export default styles;
