// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/colors.js';

const styles = StyleSheet.create({ 
    toggleButtonContainer: {
        backgroundColor: Colors.darkGray,
        borderRadius: 20,
        padding: 15,

        marginTop: 165,
        marginLeft: 20,
    },
    toggleText: {
        fontFamily: 'Futura',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.turmericYellow,
    }
});
export default styles;
