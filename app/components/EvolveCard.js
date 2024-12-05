import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PokemonImage from "./PokemonImage";
import axios from "axios";

const EvolveCard = ({ id, name, color, index, evolutionLength }) => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name]);

  return (
    <TouchableOpacity
      key={id}
      onPress={() =>
        navigation.navigate("PokemonDetails", { params: { id, name } })
      }
    >
      <PokemonImage
        id={id}
        size={50}
        color={color}
        imageUrl={pokemon?.sprites.other["showdown"].front_default}
      />
      <Text style={styles.name}>{name}</Text>
      {index !== evolutionLength - 1 && (
        <Image
          source={require("../../assets/arrow.png")}
          style={{ alignSelf: "center", marginVertical: 20 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default EvolveCard;

const styles = StyleSheet.create({
  name: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 10,
    fontFamily: "Poppins",
  },
});
