import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles.js';


export default function timePromptBox({headerText, placeholderText}) {
    const [text, setText] = useState('');
    
    return (
        <View style={styles.promptBox}>
            <Text style={styles.promptText}>
                {headerText}
            </Text>

            {/* <TimePicker />
            <DatePicker /> */}

        </View>
    )
}
