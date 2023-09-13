import React from "react";
import { View, Text, ScrollView , RefreshControl} from "react-native";
import styles from "../styles/styles";
import Card from "./Card";
const Home = ({ myRooms, username, isLoaded, onRefresh, refreshing }) => {
  return (
    <View>
      <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style = {styles.whiteBackground}
    >
        <View style = {styles.container}>
          <Text style={styles.textContainer}>Welcome, {username}!</Text>
        </View>
        {myRooms.length > 0 ? (
          myRooms.map((x, i) => (
            <Card
              key={i}
              roomId={x.roomId}
              roomName={x.roomName}
              roomUsers={x.roomUsers}
            />
          ))
        ) : (
          <View></View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
