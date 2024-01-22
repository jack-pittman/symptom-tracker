import { useState } from 'react';

// view is basically a div; text is basically the same as a <p> 
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from '../styles/general';
import { Colors } from '../styles/colors';


import ActionButton from '../components/actionButton/ActionButton';
import EmptyPromptBox from '../components/emptyPromptBox/EmptyPromptBox';



export default function DonePage() {
  const router = useRouter();

  // RETRIEVE PARAMETERS THAT WERE POSTED BY A PREVIOUS PAGE
  const params = useLocalSearchParams();

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
            <Text style={styles.subtitleGray}></Text>
          ),
          headerLeft: () => (
              <Text style={styles.subtitleGray}></Text>
          ),
        }}
      />

      <EmptyPromptBox 
        headerText={'All Done!'}
      />

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 100, }}>
          {/* <Text style={styles.notFoundBody}>You can view and edit your Symptom in your health history.</Text> */}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>

          <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/')}>
              <Image source={require('../assets/icons/home.png')} style={styles.footerImage} />
              {/* <Text style={styles.footerText}>Home</Text> */}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.footerOption} onPress={() => router.push('/history')}>
            <Image source={require('../assets/icons/calendarIcon.png')} style={styles.footerImage} />
            {/* <Text style={styles.footerText}>Calendar</Text> */}
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
  