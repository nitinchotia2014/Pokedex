import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatRate = ({ color }) => {
  return (
    <View style={{ flex: 1 }}>
      <TriangleDown style={styles.parallelogramLeft} color={color} />
      <TriangleUp style={styles.parallelogramRight} color={color} />
    </View>
  );
};

const TriangleUp = ({ style, color }) => {
  return (
    <View
      style={[
        styles.triangle,
        {
          borderBottomColor: color,
        },
        style,
      ]}
    />
  );
};

const TriangleDown = ({ style, color }) => {
  return <TriangleUp style={[styles.triangleDown, style]} color={color} />;
};

export default StatRate;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderRadius: 2,
  },
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
  parallelogramRight: {
    top: 0,
    right: -7,
    position: "absolute",
  },
  parallelogramLeft: {
    top: 0,
    left: -7,
    position: "absolute",
  },
});
