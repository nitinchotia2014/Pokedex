import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatRow from "./StatRow";

const PerformanceStats = ({ pokemon, color }) => {
  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginBottom: 20 }}>
      {pokemon.stats.map((stat, index) => (
        <View key={index} style={styles.stat}>
          <Text style={styles.statName}>{stat.stat.name}</Text>
          <StatRow
            color={color}
            rating={Math.round(stat.base_stat / 10) * 10}
          />
        </View>
      ))}
    </View>
  );
};

export default PerformanceStats;

const styles = StyleSheet.create({
  stat: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statName: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
    textTransform: "capitalize",
  },
  statValue: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
