import { View, Text, Pressable, StyleSheet }
  from "react-native";
import { useState } from "react";

export default function App() {
  const [message, setMessage] =
    useState("No action yet");

  function handlePress() {
    setMessage("Button was pressed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {message}
      </Text>
      <Pressable
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>
          Change Message
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40,marginTop: 100 },
  message: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});