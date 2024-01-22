import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";

import { createTable, insertData, selectData } from './database'; // Adjust the path accordingly

import React, { useEffect } from 'react';
import dataStore from './database';

const SomeComponent = () => {
  useEffect(() => {
    // Access and modify the array
    dataStore.symptomData.push({ category: 'Headache', startDate: '1/8/2024', startTime: '6:00 PM' });

    // Log the array
    console.log(dataStore.symptomData);
  }, []);

  return (
    <Text>My Data!!</Text>
  );
};

export default SomeComponent;