import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebse';
const Signup = ({ navigation }) => {
  const[email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const handleSubmission=async()=>{
    try {
     const userDetails= await createUserWithEmailAndPassword(auth,email,Password)
     navigation.navigate("Login")
     console.log(userDetails)
    } catch (error) {
      console.log("Getting error while creating the user with email and password",error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={value=>setEmail(value)} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={Password} onChangeText={value=>setPassword(value)} />
      <TouchableOpacity style={styles.button} onPress={() => alert('Signed up!')}>
        <Text style={styles.buttonText} onPress={handleSubmission} >Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
  button: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { color: '#28a745', marginTop: 10 }
});
export default Signup;