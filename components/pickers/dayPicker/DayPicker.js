import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';


import styles from './styles.js';
import { Colors } from '../../../styles/colors.js';


export default function DayPicker() {
  const params = useLocalSearchParams();

  const [selectedDay, setSelectedDay] = useState('1');

  const days = Array.from({ length: 31 }, (_, index) => index + 1);


  return (
    <View style={styles.dayPickerContainer}>
      {/* <Text>Select a Month:</Text> */}
      <Picker
        style={styles.dayPicker} // Adjust height and width as needed
        selectedValue={selectedDay}
        onValueChange={(itemValue) => {
          setSelectedDay(itemValue);

          // ADD router.setParams function (you will have to concatenate minutes and hours to build the time)
          router.setParams({ ...params, "day": itemValue });
          // console.log("min chngd to " + itemValue);
        }}        
        itemStyle={styles.dayItem}
      >
        {days.map((day, index) => (
          <Picker.Item key={index} label={day} value={day} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedMonth}</Text> */}
    </View>
  );
}
