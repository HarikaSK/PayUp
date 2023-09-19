import React, { useState } from "react";
import { View, Text, ScrollView , RefreshControl, Image, TouchableOpacity, TextInput} from "react-native";
import styles from "../styles/styles";
import Card from "./Card";
import searchRoom from "../assets/Search.png";

const Home = ({ myRooms, username, isLoaded, onRefresh, refreshing }) => {
  const [search, setSearch] = useState()
  return (
    <View>
      <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style = {styles.whiteBackground}
    >
        <View style = {styles.container}>
          {/* <Text style={styles.textContainer}>Welcome, {username}!</Text> */}
          <TextInput
          placeholder="Search rooms"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(q) => {
            setSearch(q);
          }}
          style={styles.searchRoom}
        ></TextInput>
        <Image source = {searchRoom} style = {styles.logoStyle}/>
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
