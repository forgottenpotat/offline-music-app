import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <LinearGradient style={{}}>
        <Text style={styles.headerText}>{props.title} Page</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    height: 100,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 36,
    textAlign: "left",
  },
});
