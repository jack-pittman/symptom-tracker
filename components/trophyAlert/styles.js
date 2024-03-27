// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors.js';

const styles = StyleSheet.create({ 
    alertContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 100, 
    },
    trophyIcon: {
        width: 100,
        height: 100,
    },    
    textContainer: {
        padding: 40, 
    },
    alertText: {
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'center',
    }
});
export default styles;
