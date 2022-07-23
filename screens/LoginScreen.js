import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image } from "react-native";
import { Input } from "@rneui/themed";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="email" />
        <Input placeholder="Password" autoFocus type="password" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
