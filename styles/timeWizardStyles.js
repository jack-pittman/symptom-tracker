// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const timeWizardStyles = StyleSheet.create({
    dropButtonContainer: {
        marginTop: 'auto',
        marginBottom: 20,
    
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    footerOption: {
        // marginTop: 10,
        marginBottom: -70,
        marginLeft: 20,
        flex: 1,
    },
    twoThirdsButton: {
        flex: 7,
    },
    pickerContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'row',
        marginBottom: 150,
        marginTop: -80,
    },
    datePickerContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'row',
        marginBottom: 150,
        marginTop: 0,
    },
    colon: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black',
        color: Colors.darkGray,
    },
    colonText: {
        fontFamily: 'Futura',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.darkGray,

        marginTop: 160,
    }


});
export default timeWizardStyles;
