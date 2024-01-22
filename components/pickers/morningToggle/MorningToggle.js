import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';


import { Colors } from '../../../styles/colors.js';
import styles from './styles.js';


export default function MorningToggle() {

    const params = useLocalSearchParams();
    // // SET DEFAULT SEARCH PARAMS (if toggle isn't pressed)
    // router.setParams({ ...params, "morningBool": "PM" });

    // console.log('params from the perspective of MorningToggle:', params);

    // USE THIS TO MANAGE BUTTON STATE
    const [morningBool, setMorningBool] = useState('PM');

    const [buttonStyle, setButtonStyle] = useState(styles.toggleButtonContainer);
    const [textStyle, setTextStyle] = useState(styles.toggleText);

    const handleClick = () => {

        if (morningBool == "AM") {
            setMorningBool('PM');
            setButtonStyle({
                backgroundColor: Colors.darkGray,
                borderRadius: 20,
                padding: 15,
        
                marginTop: 165,
                marginLeft: 20,
            });
            setTextStyle({
                fontFamily: 'Futura',
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.turmericYellow,
            });
            //UPDATE morningBool inside searchparams (pocket storage) 
            // You have to do this every time you click the toggle button to make sure info is up to date :)
            router.setParams({ ...params, "morningBool": "PM" });
        }
        else {
            setMorningBool('AM');
            setButtonStyle({
                backgroundColor: Colors.turmericYellow,
                borderRadius: 20,
                padding: 15,
        
                marginTop: 165,
                marginLeft: 20,
            });
            setTextStyle({
                fontFamily: 'Futura',
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.darkGray,
            });
            //UPDATE morningBool inside searchparams (pocket storage) 
            // You have to do this every time you click the toggle button to make sure info is up to date :)
            router.setParams({ ...params, "morningBool": "AM" });
        }
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={handleClick} activeOpacity={1}>
            <Text style={textStyle}>{morningBool}</Text>
        </TouchableOpacity>
    );
}
