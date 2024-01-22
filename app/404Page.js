import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity} from "react-native";
import { Stack, useRouter, createRouter, Link } from 'expo-router';

import styles from '../styles/general';
import { Colors } from '../styles/colors';



export default function TimeWizard() {
    return (
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
                    <Text style={styles.notFoundHeader}></Text>
                ),
                headerLeft: () => (
                    <Text style={styles.subtitleGray}></Text>
                ),
                }}
            />

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 100, }}>
                <Image source={require('../assets/icons/toolBox.png')} style={styles.notFoundImage} />
                <Text style={styles.notFoundBody}>This feature is under development. Please come back soon!</Text>
            </View>

            {/* FOOTER */}  
            <View style={styles.footer}>

            </View>

        </SafeAreaView>
    );
  }
  