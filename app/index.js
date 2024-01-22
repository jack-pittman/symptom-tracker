import { useState } from 'react';

// view is basically a div; text is basically the same as a <p> 
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity} from "react-native";
import { Stack, useRouter, createRouter, Link } from 'expo-router';

import styles from '../styles/general';
import CalendarWidget from '../components/calendarWidget/CalendarWidget';
import ActionButton from '../components/actionButton/ActionButton';

import { Colors } from '../styles/colors';

export default function Page() {
  const router = useRouter();
  
  return (
    // HEADER
    <SafeAreaView style={styles.safeAreaView}>

      {/* HEADER MESSAGE */}
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

      {/* SLICK CALENDAR WIDGET (not functional yet) */}

      <CalendarWidget />

      {/* BUTTON SCROLL VIEW */}

      <ScrollView style={styles.blueScrollView}>
        
        <View style={styles.buttonContainer}>
          {/* <Link href="/symptomWizard">HIII</Link> */}
          
          <ActionButton 
            buttonText="Daily Check-in"
            buttonBackground={Colors.jungleGreen}
            textColor={Colors.darkJungleGreen}
            destination = '/404Page'
          />

          <ActionButton 
            buttonText="New Symptom"
            buttonBackground={Colors.salmon}
            textColor={Colors.darkSalmon}
            destination = '/symptomWizard'
          />

        </View>

      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
                <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/databaseTester')}>
                  <Image source={require('../assets/icons/achievementsIcon.png')} style={styles.footerImage} />
                    {/* <Text style={styles.footerText}>Store</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/history')}>
                  <Image source={require('../assets/icons/calendarIcon.png')} style={styles.footerImage} />
                  {/* <Text style={styles.footerText}>Calendar</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/404Page')}>
                  <Image source={require('../assets/icons/profileIcon.png')} style={styles.footerImage} />
                  {/* <Text style={styles.footerText}>Profile</Text> */}
                </TouchableOpacity>
            </View>

    </SafeAreaView>
  );
}
