import React from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Styles } from 'react-native';

import styles from './styles';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>

      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your Login" autoCorrect={false} onChangeText={() =>{}} />
        <TextInput style={styles.input} placeholder="Password" autoCorrect={false} onChangeText={() =>{}} />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Enter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCreateAc}>
          <Text style={styles.btnCreateAcText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnForgot}> 
          <Text style={styles.btnForgotText}>Have u forgotten your password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


