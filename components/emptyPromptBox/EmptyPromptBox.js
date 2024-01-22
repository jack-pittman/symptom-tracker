import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import styles from './styles.js';


export default function EmptyPromptBox({headerText, placeholderText}) {
    const [text, setText] = useState('');
    
    return (
        <View style={styles.promptBox}>
            <Text style={styles.promptText}>
                {headerText}
            </Text>
            
            <Image source={require('../../assets/icons/checkMark.png')} style={styles.checkMark} />
        </View>
    )
}
