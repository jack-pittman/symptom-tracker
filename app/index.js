import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../styles/general';
import CalendarWidget from '../components/calendarWidget/CalendarWidget';
import TrophyCabinet from '../components/trophyCabinet/TrophyCabinet';
import ActionButton from '../components/actionButton/ActionButton';
import { Colors } from '../styles/colors';

import SymptomCount from "../components/trophyCabinet/SymptomCount.js";

export default function Page() {
  const router = useRouter();

  // change background color to green after symptom count reaches 5

  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    const count = SymptomCount();
    if (count > 5) {
      console.log(SymptomCount());
      const newStyle = {
        backgroundColor: Colors.lightJungleGreen,
        // flex: 1,
      };
      setCustomStyle(newStyle);
    } 
  }, []);

  return (
    <SafeAreaView style={{ ...styles.safeAreaView, ...customStyle }}>

      {/* Header */}
      <Stack.Screen 
        options={{
          headerStyle: {
            headerShadowVisible: false,
            padding: 5,
            backgroundColor: Colors.fadedBlue,
          },
          headerTitle: () => (
            <Text style={styles.subtitle}>Welcome, Jack!</Text>
          ),
          headerLeft: () => (
            <Text></Text>
          )
        }}
      />

      {/* Slick Calendar Widget (not functional yet) */}
      {/* <CalendarWidget /> */}
      <TrophyCabinet />

      {/* Button Scroll View */}
      <ScrollView style={{...styles.blueScrollView, ...customStyle}}>
        <View style={styles.buttonContainer}>
          <ActionButton 
            buttonText="Daily Check-in"
            buttonBackground={Colors.jungleGreen}
            textColor={Colors.darkJungleGreen}
            destination="/404Page"
          />
          <ActionButton 
            buttonText="New Symptom"
            buttonBackground={Colors.salmon}
            textColor={Colors.darkSalmon}
            destination="/symptomWizard"
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={{ ...styles.footer, ...customStyle}}>
        <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/404Page')}>
          <Image source={require('../assets/icons/achievementsIcon.png')} style={styles.footerImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/history')}>
          <Image source={require('../assets/icons/calendarIcon.png')} style={styles.footerImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/404Page')}>
          <Image source={require('../assets/icons/profileIcon.png')} style={styles.footerImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
