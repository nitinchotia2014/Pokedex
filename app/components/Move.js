import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { chipIcons } from "./TypeChip";

const Move = ({ move }) => {
  const [moveSet, setMoveSet] = useState(null);

  useEffect(() => {
    axios
      .get(move.move.url)
      .then(function (response) {
        setMoveSet(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!moveSet) return null;

  return (
    <View style={styles.moveContainer}>
      <View style={styles.moveInfo}>
        <View style={styles.moveTypeContainer}>
          <Image source={chipIcons[moveSet.type.name]} />
          <Text style={styles.moveName}>{move.move.name}</Text>
        </View>
        <Text style={styles.moveAccuracy}>{moveSet.accuracy}</Text>
      </View>
      <View>
        <Text style={styles.moveType}>
          {moveSet.effect_entries[0]?.short_effect}
        </Text>
      </View>
    </View>
  );
};

export default Move;

const styles = StyleSheet.create({
  moveContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
  },
  moveInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moveTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  moveName: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 18,
    textTransform: "capitalize",
  },
  moveAccuracy: {
    color: "#fff",
    fontFamily: "PoppinsExtraBold",
    fontSize: 18,
  },
  moveType: {
    color: "#888",
    fontFamily: "PoppinsLight",
    fontSize: 14,
  },
});
