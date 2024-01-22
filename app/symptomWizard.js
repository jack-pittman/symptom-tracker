import { useState } from 'react';

import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from '../styles/general';
import { Colors } from '../styles/colors';


import ActionButton from '../components/actionButton/ActionButton';
import PromptBox from '../components/promptBox/PromptBox';



export default function SymptomWizard() {
  const router = useRouter();

  return (
    // HEADER
    <SafeAreaView style={styles.safeAreaView}>

      {/* NAVIGATION BAR */}
      <Stack.Screen 
        options={{
          headerStyle: {
            headerShadowVisible: false,
            padding: 5,
            backgroundColor: "#ADD0E6",
          },
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.subtitleGray}></Text>
            </View>            ),
          headerLeft: () => (
            <Text style={styles.subtitleGray}></Text>
          ),
        }}
      />

      <PromptBox 
        headerText={"What's bothering you?"}
        placeholderText={'Type something...'}
      />

      <ScrollView style={styles.blueScrollView}>

        <View style={styles.buttonContainer}>
          <ActionButton 
            buttonText="Headache"
            buttonBackground="#BCACF2"
            textColor="#75679D"
            destination={{
              pathname: "/timeWizard",
              params: { category: "Headache"},
            }}
          />

          <ActionButton 
            buttonText="Pain"
            buttonBackground={Colors.salmon}
            textColor={Colors.darkSalmon}
            destination={{
              pathname: "/timeWizard",
              params: { category: "Pain"},
            }}
          />

          <ActionButton 
            buttonText="Nausea"
            buttonBackground={Colors.turmericYellow}
            textColor="#9D8942"
            destination={{
              pathname: "/timeWizard",
              params: { category: "Nausea"},
            }}
          />
          <ActionButton 
            buttonText="Other"
            buttonBackground="#9DB5CA"
            textColor={Colors.darkGray}
            destination={{
              pathname: "/timeWizard",
              params: { category: "Other"},
            }}
          />
        </View>

      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
              <TouchableOpacity style={styles.footerOption} onPress={() => router.back()}>
                <Image source={require('../assets/icons/back.png')} style={styles.footerImage} />
                  {/* <Text style={styles.footerText}>Back</Text> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.footerOption} onPress={() => console.log("Calendar pressed")}>
                {/* <Image source={require('../assets/icons/calendarIcon.png')} style={styles.footerImage} /> */}
                <Text style={styles.footerText}></Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.footerOption} onPress={() => console.log("Profile pressed")}>
                {/* <Image source={require('../assets/icons/profileIcon.png')} style={styles.footerImage} /> */}
                <Text style={styles.footerText}></Text>
              </TouchableOpacity>
          </View>

    </SafeAreaView>
  );
}
