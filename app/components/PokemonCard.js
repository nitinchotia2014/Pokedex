import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { Image } from "expo-image";
import PokemonImage from "./PokemonImage";

function PokemonCard({ pokemon }) {
  const navigation = useNavigation();
  const id = pokemon.url.split("/")[6].padStart(3, "0");

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("PokemonDetails", { params: pokemon })}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.idContainer}>
          <Image
            source={require("../../assets/pokeball.png")}
            style={styles.pokeball}
          />
          <Text style={styles.name}>#{id}</Text>
        </View>
      </View>
      <View style={styles.image}>
        <PokemonImage id={id} color={"#fff"} size={100} />
      </View>
    </TouchableOpacity>
  );
}

export default memo(PokemonCard, (prevProps, nextProps) => {
  return prevProps.pokemon.name === nextProps.pokemon.name;
});

const styles = StyleSheet.create({
  image: {
    width: "45%",
    height: 100 * 1.5,
  },
  name: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "white",
    fontFamily: "Poppins",
  },
  idContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  pokeball: {
    width: 20,
    height: 20,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
    marginHorizontal: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    boxShadow: "5px 5px 5px 0px rgba(255, 255, 255, 0.5)",
  },
});
