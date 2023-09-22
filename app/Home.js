import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/styles";
import Card from "./Card";
import searchRoom from "../assets/Search.png";

const Home = ({ myRooms, username, isLoaded, onRefresh, refreshing }) => {
  //myRooms is array of all the objects of rooms collection
  //store only roomnames in one array

  // var roomNames = [];

  // myRooms.map((r)=>{
  //      roomNames.push(r.roomName);
  // })



  const [search, setSearch] = useState()
  console.log("rooms are ", myRooms)
  const [list, setList] = useState([]);

  const handleSearch = (q) => {
    setSearch(q);
    // ..convert all the data in mongodb to lowecase and then uncomment the below
    // const formattedQuery = q.toLowerCase();
    const formattedQuery = q;
    console.log("youre searching for room: ", q)
    // console.log(formattedQuery);
    console.log("all the rooms ur in: ", myRooms)
    if (formattedQuery.length > 0) {
      var subarr = myRooms.filter((obj) =>
        // str.toString().toLowerCase().includes(q)
        obj.roomName.toString().includes(q)
      );
      console.log("subarray is " + subarr);
      setList(subarr);
      console.log("list: " + list);
    } else {
      console.log("search query length =0");
      setList([]);
    }
  };

  return (
    <View>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={styles.whiteBackground}
      >
        <View>

          <View style={styles.rowContainerSimple}>
            <TextInput
              placeholder="Search rooms"
              autoCapitalize="none"
              autoCorrect={false}
              value={search}
              onChangeText={(q) => {
                setSearch(q);
                handleSearch(q);
              }}
              style={styles.searchRoom}
            ></TextInput>
            <Image source={searchRoom} style={styles.searchLogoStyle} />
          </View>

          {list.length > 0 ?
            (
              <View>
                {list.map((x, i) => (
                  <Card
                    key={i}
                    roomId={x.roomId}
                    roomName={x.roomName}
                    roomUsers={x.roomUsers}
                  />
                  
                  // <View key={i} style={styles.item}><Text>{x}</Text></View>\
                  // <View key={i}>
                  //   <TouchableOpacity
                  //     style={styles.roomNameContainerBox}

                  //   >
                  //     <Text>{x.roomName}</Text>
                  //   </TouchableOpacity>
                  // </View>
                ))}
                </View>
              
            ) :
            (
              <View>
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
                  <View><Text>Create a room!</Text></View>
                )}
              </View>)}


        </View>

      </ScrollView>

    </View>
  );
};

export default Home;
