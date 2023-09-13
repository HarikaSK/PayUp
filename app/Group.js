import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import { useLocalSearchParams } from 'expo-router';
import Table from "./Table";
import { ActivityIndicator } from 'react-native-paper';

const Group = () => {
  const params = useLocalSearchParams();
  const { roomId } = params;
  const [roomDeets, setRoomDeets] = useState({});
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchRoomDetails = async (rId) => {
      try {
        const response = await fetch("https://payup-043m.onrender.com/getRoomDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roomId: rId }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // setRoomDeets(data); // Update the state
        // setIsLoaded(true)
        // Now that the state is updated, you can log it
        // console.log(data.usersData);
        // console.log(roomDeets)

        const temp = await data.usersData;
        setRoomDeets(temp);
        setIsLoaded(true)
        // console.log("this is topay in fetcher")
        // console.log(topay)
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchRoomDetails function
    fetchRoomDetails(roomId);
    
  }, []);

  useEffect(() => {
    // Log roomDeets when it changes
    console.log("this is after setting roomDeets")
    console.log(roomDeets);
   
    
    // const obj = JSON.parse(roomDeets.usersData)
    
    // console.log(obj)
    
  }, [roomDeets]);

  
  return (
    <View>
       {isLoaded ? (<View style = {styles.containerCenter}>
      {/* <Text style={styles.textWithMargin}>This is the Group page, need to get roomId from Card to this so we can fetch the data of that room Id and display it here</Text> */}
      <Table details={roomDeets}/>
    </View>) : (<View style = {styles.centerScreen}><ActivityIndicator/></View>)}
    </View>
    
  );
};

export default Group;
