import { FlashList } from "@shopify/flash-list";
import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard.js";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PokemonList() {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState([]);
  navigation.setOptions({
    title: "Pokemons",
    headerStyle: { backgroundColor: "#000" },
    headerTintColor: "white",
    headerTitleStyle: {
      fontFamily: "PoppinsBold",
    },
  });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&fields=name,types")
      .then(function (response) {
        setPokemon(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        keyExtractor={(item) => item.name}
        data={pokemon}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        estimatedItemSize={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
