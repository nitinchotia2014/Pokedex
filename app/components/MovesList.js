import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Move from "./Move";

const MovesList = ({ moves }) => {
  return (
    <View>
      {moves.map((move, index) => (
        <Move key={index} move={move} />
      ))}
    </View>
  );
};

export default MovesList;

const styles = StyleSheet.create({});
