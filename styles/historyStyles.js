// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const historyStyles = StyleSheet.create({
    scrollView: {
        padding: 20,
        marginBottom: 10,
    },
    listWrapper: {
        marginBottom: 20,
    },
    symptomContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        backgroundColor: Colors.darkGray,
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
    },
    symptomRow: {
        width: '100%',
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagDot: {
        backgroundColor: Colors.salmon,
        height: 15,
        width: 15,

        borderRadius: 20,
    },
    topText: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.arcticWhite,

        marginRight: 5,
        marginLeft: 10,
    },
    topTextNotes: {
        fontFamily: 'Futura',
        // fontFamily: 'Arial',

        fontSize: 20,
        // fontWeight: 'bold',
        fontStyle: 'italic',
        color: Colors.satinBlue,

        marginRight: 5,
        marginLeft: 10,
    },
    bottomText: {
        fontFamily: 'Futura',
        fontSize: 20,
        // fontWeight: 'bold',
        // color: Colors.fadedBlue,
        color: Colors.satinBlue,


        // marginRight: 50,
        marginLeft: 10,
        marginTop: 25,
    },
    symptomWrapper: {
        padding: 20,
    },
    notesWrapper: {

    },
    notesContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        backgroundColor: Colors.arcticWhite,
        padding: 10,
        borderRadius: 20,
        marginTop: 15,        
    },
    notesText: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.satinBlue,

        marginRight: 5,
        marginLeft: 10,

        width: '100%',
    },
});
export default historyStyles;
