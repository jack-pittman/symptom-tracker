import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Stack, useRouter, router, useLocalSearchParams } from 'expo-router';


import styles from './styles.js';
import { Colors } from '../../../styles/colors.js';


export default function YearPicker() {
  // RETRIEVE PARAMETERS THAT WERE POSTED BY A PREVIOUS PAGE
  const params = useLocalSearchParams();

  const [selectedYear, setSelectedYear] = useState('January');

  const years = [
    '2023','2024', '2025', '2026'
  ];

  return (
    <View style={styles.yearPickerContainer}>
      {/* <Text>Select a year:</Text> */}
      <Picker
        style={styles.yearPicker} // Adjust height and width as needed
        selectedValue={selectedYear}
        onValueChange={(itemValue) => {
          setSelectedYear(itemValue);

          // ADD router.setParams function (you will have to concatenate minutes and hours to build the time)
          router.setParams({ ...params, "year": itemValue });
          // console.log("min chngd to " + itemValue);
        }}
        itemStyle={{ color: Colors.darkGray, fontFamily: "Futura", fontSize: 18, fontWeight: 'bold' }}
      >
        {years.map((year, index) => (
          <Picker.Item key={index} label={year} value={year} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedyear}</Text> */}
    </View>
  );
}
