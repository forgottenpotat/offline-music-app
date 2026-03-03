import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const SongCard = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.songCard}>
        <View style={styles.songTitleAuthor}>
          <Text>{props.author} -</Text>
          <Text>{props.songName}</Text>
        </View>
        <View style={styles.songGenre}>
          <Text>{props.genre != "NULL" ? props.genre : ""}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  songCard: {
    backgroundColor: "white",
    padding: 12,
    display: "flex",
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 20,
    flexDirection: "row",
    borderRadius: 20,
  },
  songTitleAuthor: {
    width: 300,
    gap: 5,
    flexDirection: "row",
  },
  songGenre: {},
});
