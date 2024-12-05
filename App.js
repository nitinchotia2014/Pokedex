import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import PokemonList from "./app/PokemonList";
import PokemonDetails from "./app/PokemonDetails";
import Loading from "./app/components/Loading";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
      PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
      PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
      PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
      PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
