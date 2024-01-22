// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const historyStyles = StyleSheet.create({
    scrollView: {
        padding: 20,
    },
    symptomContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        backgroundColor: Colors.darkGray,
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
    },
    symptomRow: {
        width: '100%',
        
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',


    },
    topText: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.arcticWhite,

        marginRight: 5,
        marginLeft: 10,
    },
    bottomText: {
        fontFamily: 'Futura',
        fontSize: 20,
        // fontWeight: 'bold',
        color: Colors.fadedBlue,

        // marginRight: 50,
        marginLeft: 10,
        marginTop: 25,
    },
    symptomWrapper: {
        padding: 20,
    }
});
export default historyStyles;
