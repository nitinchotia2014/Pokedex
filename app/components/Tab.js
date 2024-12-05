import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useRef } from "react";

const Tab = ({ pokemon, changeTab }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const pagerRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          hitSlop={10}
          style={[styles.tab, { borderBottomWidth: selectedTab === 0 ? 2 : 0 }]}
          onPress={() => {
            setSelectedTab(0);
            changeTab(0);
          }}
        >
          <Text style={styles.tabText}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={10}
          style={[styles.tab, { borderBottomWidth: selectedTab === 1 ? 2 : 0 }]}
          onPress={() => {
            setSelectedTab(1);
            changeTab(1);
          }}
        >
          <Text style={styles.tabText}>Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={10}
          style={[styles.tab, { borderBottomWidth: selectedTab === 2 ? 2 : 0 }]}
          onPress={() => {
            setSelectedTab(2);
            changeTab(2);
          }}
        >
          <Text style={styles.tabText}>Evolution</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    marginVertical: 20,
  },
  page: {
    flex: 1,
    height: "500",
    backgroundColor: "red",
  },
  tab: {
    color: "#fff",
    fontFamily: "Poppins",
    borderBottomColor: "#fff",
    paddingBottom: 5,
  },
  tabText: {
    color: "#fff",
    fontFamily: "Poppins",
  },
});
