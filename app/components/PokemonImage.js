import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadialGradient } from "react-native-gradients";
import { Image } from "expo-image";

const PokemonImage = ({ id, color, size = 300, imageUrl }) => {
  const colorList = [
    {
      offset: "0%",
      color,
      opacity: "1",
    },
    { offset: "67%", color: "#000", opacity: "1" },
  ];

  return (
    <View style={[styles.imageContainer, { height: size * 1.5 }]}>
      <RadialGradient
        x="50%"
        y="50%"
        rx={size}
        ry={size}
        colorList={colorList}
      />
      <Image
        style={[styles.image, { height: size * 1.5 }]}
        source={{
          uri:
            imageUrl ||
            `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${id}.png`,
        }}
        transition={100}
        contentFit="contain"
      />
    </View>
  );
};

export default PokemonImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
});
