import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import react, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [background, setBackGround] = useState("#fff");
  const [textColor, setTextColor] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with email:", email, "and password:", password);
    //navigation.navigate("Next");
  };

  const handleBackGroundChange = () => {
    const newBackgroundColor = background === "#fff" ? "#000" : "#fff";
    setBackGround(newBackgroundColor);
  };

  useEffect(() => {
    const currentTime = new Date().getHours();

    // Define the color schemes for different times of day
    let newBackgroundColor;
    if (currentTime >= 6 && currentTime < 12) {
      // Morning: 6am to 12pm
      newBackgroundColor = "#FFD700"; // Gold
    } else if (currentTime >= 12 && currentTime < 18) {
      // Afternoon: 12pm to 6pm
      newBackgroundColor = "#87CEEB"; // Sky blue
    } else {
      // Evening/Night: 6pm to 6am
      newBackgroundColor = "#483D8B"; // Dark slate blue
    }

    // Update the background color state
    setBackGround(newBackgroundColor);
  }, []);

  return (
    <>
      <View style={[styles.topContainer, { backgroundColor: background }]}>
        <TouchableOpacity
          style={styles.buttonBackGround}
          onPress={handleBackGroundChange}
        >
          <Text style={styles.buttonBackGroundChanger}>D/L</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat1.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text
          style={[
            styles.heading,
            { color: background === "#fff" ? "#000" : "#fff" },
          ]}
        >
          Login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={background === "#fff" ? "#888" : "#ccc"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Password"
          placeholderTextColor={background === "#fff" ? "#888" : "#ccc"}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonBackGround: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "10%",
    height: 40,
    backgroundColor: "blue",
    marginTop: 60,
    position: "absolute",
    right: 20,
  },
  buttonBackGroundChanger: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  topContainer: {
    top: 0,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginPage;
