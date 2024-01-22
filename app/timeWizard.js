import { useState } from 'react';

// view is basically a div; text is basically the same as a <p> 
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from '../styles/general';
import timeWizardStyles from '../styles/timeWizardStyles';

import { Colors } from '../styles/colors';

import ActionButton from '../components/actionButton/ActionButton';
import TimePromptBox from '../components/timePromptBox/TimePromptBox';
import HourPicker from '../components/pickers/hourPicker/HourPicker';
import MinutePicker from '../components/pickers/minutePicker/MinutePicker';

import MorningToggle from '../components/pickers/morningToggle/MorningToggle';

export default function TimeWizard() {
  const router = useRouter();

  // RETRIEVE PARAMETERS THAT WERE POSTED BY A PREVIOUS PAGE
  const params = useLocalSearchParams();

  // console.log('params from symptomWizard:', params);

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
            <Text style={styles.subtitleGray}></Text>
          ),
          headerLeft: () => (
              <Text style={styles.subtitleGray}></Text>
          ),
        }}
      />

      {/* DARK GRAY BOX */}
      <TimePromptBox 
        headerText={'When did your symptoms start?'}

      />

      {/* TIME SELECTOR  */}

      <View style={timeWizardStyles.pickerContainer}>
        <HourPicker />
        <View style={timeWizardStyles.colon}>
          <Text style={timeWizardStyles.colonText}>:</Text>
        </View>
        <MinutePicker />
        <MorningToggle />
      </View>

      <View style={timeWizardStyles.dropButtonContainer}>

        {/* BACK BUTTON */}
        <TouchableOpacity style={timeWizardStyles.footerOption} onPress={() => router.back()}>
              <Image source={require('../assets/icons/back.png')} style={styles.footerImage} />
              {/* <Text style={styles.footerText}>Back</Text> */}
        </TouchableOpacity>

        <View style={timeWizardStyles.twoThirdsButton}>
          <ActionButton 
            buttonText="Next"
            buttonBackground={Colors.jungleGreen}
            textColor={Colors.darkJungleGreen}
            destination={{
              pathname: "/dateWizard",
              params: { ...params, ...{}}, //, morningBool: "AM" startTime: "9:00"
            }}
          />
        </View>

      </View>
      {/* FOOTER */}


    </SafeAreaView>
  );
}
