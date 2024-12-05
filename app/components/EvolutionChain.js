import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { extractSpeciesUrls } from "../utils/utils";
import EvolveCard from "./EvolveCard";

const EvolutionChain = ({ pokemon, color }) => {
  const [evolution, setEvolution] = useState(null);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
        );
        const evolutionResponse = await axios.get(
          speciesResponse.data.evolution_chain.url
        );
        console.log("evolution", extractSpeciesUrls(evolutionResponse.data));
        setEvolution(extractSpeciesUrls(evolutionResponse.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvolutionChain();
  }, []);

  return (
    <View style={styles.evolutionContainer}>
      {evolution?.map(({ id, name }, index) => (
        <EvolveCard
          id={id}
          name={name}
          color={color}
          index={index}
          evolutionLength={evolution.length}
        />
      ))}
    </View>
  );
};

export default EvolutionChain;

const styles = StyleSheet.create({
  evolutionContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
