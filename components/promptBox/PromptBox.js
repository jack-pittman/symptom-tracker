import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles.js';


export default function PromptBox({headerText, placeholderText}) {
    const [text, setText] = useState('');
    
    return (
        <View style={styles.promptBox}>
            <Text style={styles.promptText}>
                {headerText}
            </Text>

            <View style={styles.textBox}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholderText}
                    placeholderTextColor={'darkgray'}
                    value={text}
                    onChangeText={(inputText) => setText(inputText)}
                />
            </View>
        </View>
    )
}
