import { View, Text, Image, StyleSheet } from "react-native";

export const chipColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#13D4D8",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const chipIcons = {
  normal: require("../../assets/normal.png"),
  fire: require("../../assets/fire.png"),
  water: require("../../assets/water.png"),
  grass: require("../../assets/grass.png"),
  electric: require("../../assets/electric.png"),
  ice: require("../../assets/ice.png"),
  fighting: require("../../assets/fighting.png"),
  poison: require("../../assets/poison.png"),
  ground: require("../../assets/ground.png"),
  flying: require("../../assets/flying.png"),
  psychic: require("../../assets/psychic.png"),
  bug: require("../../assets/bug.png"),
  rock: require("../../assets/rock.png"),
  ghost: require("../../assets/ghost.png"),
  dragon: require("../../assets/dragon.png"),
  dark: require("../../assets/dark.png"),
  steel: require("../../assets/steel.png"),
  fairy: require("../../assets/fairy.png"),
};

export default function getTypeChip({ type }) {
  return (
    <View style={[styles.typeChip, { borderColor: chipColors[type] }]}>
      <Image style={styles.typeIcon} source={chipIcons[type]} />
      <Text style={[styles.type, { color: chipColors[type] }]}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  typeChip: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 2,
    gap: 5,
  },
  typeIcon: {
    width: 20,
    height: 20,
  },
  type: {
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "Poppins",
  },
});
