import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import AuthStateHook from '../Hooks/AuthStateHook';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebse';

const Profile = ({ navigation }) => {
  const { user } = AuthStateHook();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigation.replace("Home"); 
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {user ? <Text style={styles.userEmail}>Welcome, {user.email}</Text> : null}

      {!user ? (
        <>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              Already have an account? <Text style={styles.loginLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View>
        <TouchableOpacity style={styles.logout} onPress={handleLogout}> 
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logout}> 
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("TaskScreen")} >Add Task</Text>
        </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f8f9fa", 
  },
  text: {
    fontSize: 40, 
    fontWeight: "bold", 
    color: "black", 
    textAlign: "center", 
    marginBottom: 20, 
  },
  userEmail: {
    fontSize: 18,
    color: "#28a745",
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#28a745', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    alignItems: "center", 
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16, 
    color: "black",
  },
  loginLink: {
    color: "#007bff", 
    fontWeight: "bold",
  },
  logout:{
    backgroundColor:"red",
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    alignItems: "center", 
    justifyContent: "center",
    marginBottom: 10,
  }
});