// history.js

import { useState, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/general';
import historyStyles from '../styles/historyStyles';
import { Colors } from '../styles/colors';
import dataStore from './database'; // Import the dataStore

export default function History() {
  const router = useRouter();

  useEffect(() => {
    // Example of adding data to dataStore
    // dataStore.symptomData.push({ category: 'Headache', startDate: '1/8/2024', startTime: '6:00 PM' });
  }, []);

  return (
    // HEADER
    <SafeAreaView style={styles.safeAreaView}>
      {/* NAVIGATION BAR */}
      <Stack.Screen
        options={{
          headerStyle: {
            headerShadowVisible: false,
            padding: 5,
            backgroundColor: '#ADD0E6',
          },
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.subtitleGray}>My History</Text>
            </View>
          ),
          headerLeft: () => <Text></Text>,
        }}
      />

      <ScrollView style={historyStyles.scrollView}>
        {dataStore.symptomData.map((item, index) => (
          <View style={historyStyles.symptomContainer} key={index}>
            {/* NAME AND DESCRIPTION ROW */}
            <View style={historyStyles.symptomRow}>
              <Text style={historyStyles.topText}>{item.category}</Text>
            </View>

            <View style={historyStyles.symptomRow}>
              <Text style={historyStyles.bottomText}>{item.startTime}</Text>
              <Text style={historyStyles.bottomText}>{item.startDate}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/')}>
          <Image source={require('../assets/icons/home.png')} style={styles.footerImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
