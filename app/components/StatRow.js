import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatRate from "./StatRate";

const StatRow = ({ color, rating }) => {
  if (rating >= 100) {
    rating = 100;
  }
  return (
    <View style={{ flexDirection: "row", gap: 15 }}>
      {new Array(rating / 10).fill(0).map((_, index) => (
        <StatRate key={index} color={color} />
      ))}
      {new Array((100 - rating) / 10).fill(0).map((_, index) => (
        <StatRate key={index} color={"#444"} />
      ))}
    </View>
  );
};

export default StatRow;

const styles = StyleSheet.create({});
