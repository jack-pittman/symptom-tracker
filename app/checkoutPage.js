import { useState } from 'react';

// view is basically a div; text is basically the same as a <p> 
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from '../styles/general';
import timeWizardStyles from '../styles/timeWizardStyles';
import historyStyles from '../styles/historyStyles';

import { Colors } from '../styles/colors';

import SaveSymptomButton from '../components/saveSymptomButton/SaveSymptomButton';
import EmptyPromptBox from '../components/emptyPromptBox/EmptyPromptBox';



export default function checkoutPage() {
  const router = useRouter();

  // RETRIEVE PARAMETERS THAT WERE POSTED BY A PREVIOUS PAGE
  const params = useLocalSearchParams();

  var symptomCategory = useLocalSearchParams().category;
  let symptomTime;
  let symptomDate;

  const startTimeHrs = useLocalSearchParams().startTimeHrs;
  const startTimeMins = useLocalSearchParams().startTimeMins;
  const morningBool = useLocalSearchParams().morningBool;

  // HANDLE TIME LOADING
  if (startTimeHrs !== undefined && startTimeMins !== undefined) {
    // Values are available, construct the time string
    symptomTime = `${startTimeHrs}:${startTimeMins} ${morningBool || 'PM'}`;
  } else {
    // Values are still loading or undefined, show loading indicator or default message
    symptomTime = 'Loading...'; // or any default message you prefer
  }

  // DATE MANAGER
  function getMonthNumber(monthString) {
    const monthMap = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12,
    };

    // Return the corresponding month number, or null if not found
    return monthMap[monthString] || null;
  }

  const day = useLocalSearchParams().day;
  const month = getMonthNumber(useLocalSearchParams().month);
  const year = useLocalSearchParams().year;

  // HANDLE DATE LOADING
  if (day !== undefined && month !== undefined && year !== undefined) {
    // Values are available, construct the time string
    symptomDate = `${month}/${day}/${year}`;
  } else {
    // Values are still loading or undefined, show loading indicator or default message
    symptomDate = 'Loading...'; // or any default message you prefer
  }
  
  // console.log('params from dateWizard:', params);

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
            <Text style={styles.subtitleGray}>Summary</Text>
          ),
          headerLeft: () => (
              <Text style={styles.subtitleGray}></Text>
          ),
        }}
      />

      {/* SYMPTOM OBJECT */}
      <ScrollView>
        <View style={historyStyles.symptomWrapper}>
          <View style={historyStyles.symptomContainer}>

            { /* NAME AND DESCRIPTION ROW */}
            <View style={historyStyles.symptomRow}>
              <Text style={historyStyles.topText}>
                {symptomCategory}
              </Text>
            </View>

            {/* DATE AND TIME ROW */}
            <View style={historyStyles.symptomRow}>
              <Text style={historyStyles.bottomText}>
                {symptomTime}
              </Text>
              <Text style={historyStyles.bottomText}>
                {symptomDate}
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 100, }}>
          {/* <Text style={styles.notFoundBody}>You can view and edit your Symptom in your health history.</Text> */}
      </View>

      {/* FOOTER */}
      <View style={timeWizardStyles.dropButtonContainer}>

        <TouchableOpacity style={timeWizardStyles.footerOption} onPress={() => router.back()}>
              <Image source={require('../assets/icons/back.png')} style={styles.footerImage} />
              {/* <Text style={styles.footerText}>Back</Text> */}
        </TouchableOpacity>

        <View style={timeWizardStyles.twoThirdsButton}>
          <SaveSymptomButton 
            sCategory={symptomCategory}
            sTime={symptomTime}
            sDate={symptomDate}
            
            buttonText="Create"
            buttonBackground={Colors.jungleGreen}
            textColor={Colors.darkJungleGreen}
            destination={{
              pathname: "/donePage",
              // params: { ...params, ...{startDate: "01/08/2024" }},
            }}
          />
        </View>

      </View>

    </SafeAreaView>
  );
}
  