import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Image
        style={{ width: 120, height: 100 }}
        source={require("../../assets/loading.webp")}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
