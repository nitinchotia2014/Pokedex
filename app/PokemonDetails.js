import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import TypeChip, { chipColors } from "./components/TypeChip";
import PokemonImage from "./components/PokemonImage";
import Loading from "./components/Loading";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import Stats from "./components/Stats";
import Tab from "./components/Tab";
import PerformanceStats from "./components/PerformanceStats";
import MovesList from "./components/MovesList";
import EvolutionChain from "./components/EvolutionChain";

export default function PokemonDetails() {
  const navigation = useNavigation();
  const { name } = navigation.getState().routes[1].params.params;
  const [iconName, setIconName] = useState("volume-2");
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState("");
  const [sound, setSound] = useState();
  const [song, setSong] = useState();
  const [selectedTab, setSelectedTab] = useState(0);
  const [imageSize, setImageSize] = useState(300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconName("volume");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        const id = response.data.id.toString().padStart(3, "0");
        setId(id);
        setSong(response.data.cries.latest);
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    async function playInitialSound() {
      if (!song) return;
      try {
        const { sound } = await Audio.Sound.createAsync({
          uri: song,
        });
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error("Error loading or playing sound:", error);
      }
    }

    playInitialSound();
  }, [song]);

  const handlePress = async () => {
    if (sound) {
      await sound.replayAsync();
      setIconName("volume-2");
      setTimeout(() => {
        setIconName("volume");
      }, 1000);
    }
  };

  navigation.setOptions({
    title: name.charAt(0).toUpperCase() + name.slice(1),
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontFamily: "PoppinsBold",
      textAlign: "center",
    },
    headerRight: () => (
      <TouchableOpacity onPress={handlePress}>
        <Feather name={iconName} size={24} color="white" />
      </TouchableOpacity>
    ),
  });

  const changeTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y + 70;
    const newSize = Math.max(40, 300 - scrollY); // Adjust the size limits as needed
    setImageSize(newSize);
  };

  if (!pokemon) {
    return <Loading />;
  }

  return (
    <ScrollView
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      stickyHeaderIndices={[0]}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#000",
          paddingBottom: 10,
        }}
      >
        <PokemonImage
          id={id}
          size={imageSize}
          color={chipColors[pokemon.types[0].type.name]}
          imageUrl={pokemon.sprites.other["dream_world"].front_default}
        />
        <Text style={[styles.name, { fontSize: Math.max(16, imageSize / 10) }]}>
          {pokemon.name}
        </Text>
      </View>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type) => (
          <TypeChip type={type.type.name} />
        ))}
      </View>
      <Stats pokemon={pokemon} />
      <Tab pokemon={pokemon} changeTab={changeTab} />
      {selectedTab === 0 && (
        <PerformanceStats
          pokemon={pokemon}
          color={chipColors[pokemon.types[0].type.name]}
        />
      )}
      {selectedTab === 1 && <MovesList moves={pokemon.moves} />}
      {selectedTab === 2 && (
        <EvolutionChain
          pokemon={pokemon}
          color={chipColors[pokemon.types[0].type.name]}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
  },
  name: {
    textAlign: "center",
    textTransform: "capitalize",
    color: "white",
    fontFamily: "Poppins",
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
});
