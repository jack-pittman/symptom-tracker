import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';


import styles from './styles.js';
import { Colors } from '../../../styles/colors.js';


export default function MinutePicker() {
  const params = useLocalSearchParams();

  // update and manage the current minute
  const [selectedMinute, setSelectedMinute] = useState('30');

  // SET UP PICKER CONTENT (In this case, it's a series of numbers 5-55 incrementing in multiples of 5)
  const minutes = Array.from({ length: 12 }, (_, index) => (index * 5 < 10 ? '0' : '') + index * 5);

  return (
    <View style={styles.minutePickerContainer}>
      {/* <Text>Select a Month:</Text> */}
      <Picker
        style={styles.minutePicker} // Adjust height and width as needed
        selectedValue={selectedMinute}
        onValueChange={(itemValue) => {
          setSelectedMinute(itemValue);

          // ADD router.setParams function (you will have to concatenate minutes and hours to build the time)
          router.setParams({ ...params, "startTimeMins": itemValue });
          // console.log("min chngd to " + itemValue);
        }}
        itemStyle={styles.minuteItem}
      >
        {minutes.map((minute, index) => (
          <Picker.Item key={index} label={minute} value={minute} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedMonth}</Text> */}
    </View>
  );
}
