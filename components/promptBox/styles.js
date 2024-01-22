// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors.js';

const styles = StyleSheet.create({ 
    promptBox: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: Colors.darkGray, // Set your default color
        marginRight: 10, 
        marginLeft: 10,
        marginTop: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    promptText: {
        color: Colors.arcticWhite,
        fontSize: 25,
        fontWeight: 'bold',
    },
    textBox: {
        backgroundColor: Colors.arcticWhite,
        marginTop: 40,

        borderRadius: 20,
        width: '100%',
        padding: 10,
    },
    input: {
        height: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,

        color: 'darkgray',
        marginLeft: 15,
    }
});
export default styles;
