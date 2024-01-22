import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';

import styles from './styles.js';
import { Colors } from '../../../styles/colors.js';


export default function MonthPicker() {
  // GET ACCESS TO LOCAL DATA BANK (I like to think of it as pocket data)
  const params = useLocalSearchParams();

  const [selectedMonth, setSelectedMonth] = useState('January');

  const months = [
    'JAN', 'FEB', 'MAR', 'APR',
    'MAY', 'JUN', 'JUL', 'AUG',
    'SEP', 'OCT', 'NOV', 'DEC',
  ];

  return (
    <View style={styles.monthPickerContainer}>
      {/* <Text>Select a Month:</Text> */}
      <Picker
        style={styles.monthPicker} // Adjust height and width as needed
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => {
          setSelectedMonth(itemValue);

          // ADD router.setParams function (you will have to concatenate minutes and hours to build the time)
          router.setParams({ ...params, "month": itemValue });
          // console.log("min chngd to " + itemValue);
        }}
        itemStyle={{ color: Colors.darkGray, fontFamily: "Futura", fontSize: 18, fontWeight: 'bold' }}
      >
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={month} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedMonth}</Text> */}
    </View>
  );
}
