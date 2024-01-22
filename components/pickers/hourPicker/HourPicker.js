import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';


import styles from './styles.js';
import { Colors } from '../../../styles/colors.js';


export default function HourPicker() {
  // GET ACCESS TO LOCAL DATA BANK (I like to think of it as pocket data)
  const params = useLocalSearchParams();
    
  const [selectedHour, setSelectedHour] = useState('1');

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);


  return (
    <View style={styles.hourPickerContainer}>
      {/* <Text>Select a Month:</Text> */}
      <Picker
        style={styles.hourPicker} // Adjust height and width as needed
        selectedValue={selectedHour}
        onValueChange={(itemValue) => {
          setSelectedHour(itemValue);

          // ADD router.setParams function (you will have to concatenate minutes and hours to build the time)
          router.setParams({ ...params, "startTimeHrs": itemValue });
          // console.log("min chngd to " + itemValue);
        }}
        itemStyle={styles.hourItem}
      >
        {hours.map((hour, index) => (
          <Picker.Item key={index} label={hour} value={hour} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedMonth}</Text> */}
    </View>
  );
}
