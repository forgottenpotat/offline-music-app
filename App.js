import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, FlatList } from "react-native";
import SongCard from "./components/SongCard";
import { Header } from "./components/Header";
const onPress = () => {
  Alert.alert("Button pressed!");
};

const songList = [
  { id: 1, songName: "In The End", artist: "Linkin Park", genre: "Nu Metal" },
  {
    id: 2,
    songName: "Falling Away From Me",
    artist: "KoRn",
    genre: "Nu Metal",
  },
  {
    id: 3,
    songName: "Looping the Rooms",
    artist: "rusino, Hatsune Miku",
    genre: "NULL",
  },
  { id: 4, songName: "Go Away", artist: "Weezer", genre: "Alt Rock" },
  {
    id: 5,
    songName: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Grunge",
  },
  {
    id: 6,
    songName: "Boulevard of Broken Dreams",
    artist: "Green Day",
    genre: "Punk Rock",
  },
  { id: 7, songName: "Numb", artist: "Linkin Park", genre: "Nu Metal" },
  { id: 8, songName: "Enter Sandman", artist: "Metallica", genre: "Metal" },
  { id: 9, songName: "All Star", artist: "Smash Mouth", genre: "Pop Rock" },
  { id: 10, songName: "Take On Me", artist: "a-ha", genre: "Synth Pop" },
  { id: 11, songName: "Blue Monday", artist: "New Order", genre: "Synth Pop" },
  {
    id: 12,
    songName: "Californication",
    artist: "Red Hot Chili Peppers",
    genre: "Alt Rock",
  },
  {
    id: 13,
    songName: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Hard Rock",
  },
  { id: 14, songName: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  { id: 15, songName: "Bad Guy", artist: "Billie Eilish", genre: "Pop" },
  { id: 16, songName: "Hysteria", artist: "Muse", genre: "Alt Rock" },
  {
    id: 17,
    songName: "Chop Suey!",
    artist: "System Of A Down",
    genre: "Metal",
  },
  {
    id: 18,
    songName: "Ride",
    artist: "Twenty One Pilots",
    genre: "Alternative",
  },
  {
    id: 19,
    songName: "Clint Eastwood",
    artist: "Gorillaz",
    genre: "Alternative",
  },
  { id: 20, songName: "Faint", artist: "Linkin Park", genre: "Nu Metal" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.songListContainer}>
        <FlatList
          style={styles.songListStyle}
          data={songList}
          ItemSeparatorComponent={<View style={{ height: 5 }}></View>}
          renderItem={({ item }) => (
            <SongCard
              id={item.id}
              songName={item.songName}
              author={item.artist}
              genre={item.genre}
            />
          )}
        ></FlatList>
      </View>
      <View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C",
    alignItems: "center",
    justifyContent: "center",
  },
  songListContainer: {
    margin: 20,
    width: "100%",
  },
  songListStyle: {
    display: "flex",
    height: 500,
    width: "90%",
    margin: "auto",
  },
});
