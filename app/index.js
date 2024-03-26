import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../styles/general';
import CalendarWidget from '../components/calendarWidget/CalendarWidget';
import TrophyCabinet from '../components/trophyCabinet/TrophyCabinet';
import ActionButton from '../components/actionButton/ActionButton';
import { Colors } from '../styles/colors';

export default function Page() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaView}>

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
      <ScrollView style={styles.blueScrollView}>
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
      <View style={styles.footer}>
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
