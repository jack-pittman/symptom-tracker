// PageStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors.js';

const styles = StyleSheet.create({ 
    horizontalFlex: {
        flexDirection: 'row', // Align children horizontally
        justifyContent: 'space-between', // This will place one child at the start and the other at the end of the container
        alignItems: 'center', 
        marginTop: 10,
    },    
    leftSide: {
        backgroundColor: Colors.arcticWhite,
        // borderTopRightRadius: 5,
        // borderBottomRightRadius: 5,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,

        height: 100,
        flex: 6, // You could use flex to make the children share the available space
        marginTop: 0,
        // marginRight: 2.5, // Reduced to half, since it's inside a row
        marginLeft: 10,

        flexDirection: 'row', 
        justifyContent: 'center', // This will place one child at the start and the other at the end of the container
        alignItems: 'center',

    },
    dotArray: {
        flexDirection: 'row', 
        justifyContent: 'center', // This will place one child at the start and the other at the end of the container
        alignItems: 'center',

        marginRight: 15,
    },
    dotStack: {

        flexDirection: 'column', 
        justifyContent: 'center', // This will place one child at the start and the other at the end of the container
        alignItems: 'center',

    },
    hiddenDot: {
        width: 18,
        height: 18,

        borderRadius: 9,

        marginTop: 2,
        marginBottom: 2,
        marginRight: 2,
        marginLeft: 2,
    },
    yellowDot: {
        backgroundColor: Colors.turmericYellow,
    
        width: 18,
        height: 18,
    
        borderRadius: 9,
    
        marginTop: 2,
        marginBottom: 2,
        marginRight: 2,
        marginLeft: 2,
    },
    

    inactiveDot: {
        backgroundColor: Colors.fadedBlue,

        width: 18,
        height: 18,

        borderRadius: 9,

        marginTop: 2,
        marginBottom: 2,
        marginRight: 2,
        marginLeft: 2,
    },
    redDot: {
        backgroundColor: Colors.salmon,

        width: 18,
        height: 18,

        borderRadius: 9,

        marginTop: 2,
        marginBottom: 2,
        marginRight: 2,
        marginLeft: 2,
    },
    purpleDot: {
        backgroundColor: '#BCACF2',

        width: 18,
        height: 18,

        borderRadius: 9,

        marginTop: 2,
        marginBottom: 2,
        marginRight: 2,
    },
    rightSide: {
        backgroundColor: Colors.darkGray,


        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        // borderTopLeftRadius: 5,
        // borderBottomLeftRadius: 5,

        height: 100,
        flex: 3, // Same as leftSide, so they take equal space
        marginTop: 0,
        marginRight: 10,
        // marginLeft: 2.5, // Reduced to half, since it's inside a row

        flexDirection: 'column', 
        justifyContent: 'center', // This will place one child at the start and the other at the end of the container
        alignItems: 'center',
    },
    bigDateText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Colors.arcticWhite,
        marginTop: -6,
    },
    smallMonthText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.fadedBlue,
    },
});
export default styles;
