import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const Stats = ({ pokemon }) => {
  return (
    <View style={styles.statsContainer}>
      <View
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.stat}>
          <MaterialIcons name="monitor-weight" size={24} color="#bbb" />
          <Text style={styles.statText}>{pokemon.weight}lb</Text>
        </View>
        <Text style={styles.statLabel}>Weight</Text>
      </View>
      <View
        style={{ width: 1, borderWidth: 1, borderColor: "#888", height: 40 }}
      ></View>
      <View
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.stat}>
          <MaterialIcons name="height" size={24} color="#bbb" />
          <Text style={styles.statText}>{pokemon.height}m</Text>
        </View>
        <Text style={styles.statLabel}>Height</Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statsContainer: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statLabel: {
    fontFamily: "Poppins",
    color: "#888",
    fontSize: 12,
    marginTop: 5,
  },
  statText: {
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 20,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
