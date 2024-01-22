import { useState } from 'react';

// view is basically a div; text is basically the same as a <p> 
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { Stack, router, useRouter, useLocalSearchParams } from 'expo-router';

import styles from '../styles/general';
import timeWizardStyles from '../styles/timeWizardStyles';

import { Colors } from '../styles/colors';


import ActionButton from '../components/actionButton/ActionButton';
import TimePromptBox from '../components/timePromptBox/TimePromptBox';
import MonthPicker from '../components/pickers/monthPicker/MonthPicker';
import DayPicker from '../components/pickers/dayPicker/DayPicker';
import HourPicker from '../components/pickers/hourPicker/HourPicker';
import MinutePicker from '../components/pickers/minutePicker/MinutePicker';
import YearPicker from '../components/pickers/yearPicker/YearPicker';


import MorningToggle from '../components/pickers/morningToggle/MorningToggle';





export default function DateWizard() {
  const router = useRouter();

  // RETRIEVE PARAMETERS THAT WERE POSTED BY A PREVIOUS PAGE
  const params = useLocalSearchParams();

  // console.log('params from timeWizard:', params);

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

      <TimePromptBox 
        headerText={'When did your symptoms start?'}

      />

      {/* DATE SELECTOR  */}

      <View style={timeWizardStyles.datePickerContainer}>
        <MonthPicker />
        <DayPicker />
        <YearPicker />

      </View>

      {/* FOOTER */}
      <View style={timeWizardStyles.dropButtonContainer}>

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
              pathname: "/checkoutPage",
              // params: { ...params, ...{startDate: "01/08/2024" }},
            }}
          />
        </View>

      </View>

    </SafeAreaView>
  );
}
