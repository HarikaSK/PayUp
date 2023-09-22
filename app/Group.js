import React, { useState, useEffect } from 'react';
import { View, Text , TouchableOpacity, ToastAndroid,LogBox, AlertIOS, Platform, Clipboard} from 'react-native';
import styles from '../styles/styles';
import { useLocalSearchParams } from 'expo-router';
import Table from "./Table";
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Group = () => {
  const params = useLocalSearchParams();
  const { roomId } = params;

  const [roomDeets, setRoomDeets] = useState({});
  const [isLoaded,setIsLoaded] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([])
  const [username, setUsername] = useState('')
  const [fullData, setFullData] = useState({});

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
        setFullData(data);
        // setRoomDeets(data); // Update the state
        // setIsLoaded(true)
        // Now that the state is updated, you can log it
        // console.log(data.usersData);
        let obj = await AsyncStorage.getItem('userData');
        obj = JSON.parse(obj);
        setUsername(obj['username']);
        console.log(username,"grp func username")
        console.log(data);
        const temp = await data.usersData;
        const temp_pay = await data.roomHistory;
        setRoomDeets(temp);
        setPaymentHistory(temp_pay)
        console.log("this is history in grp")
        console.log(temp_pay)
        setIsLoaded(true)
        // console.log("this is topay in fetcher")
        // console.log(topay)
      } 
      catch (error) {
        console.error("Error fetching group data:", error);
      }
    };

    // Call the fetchRoomDetails function
    fetchRoomDetails(roomId);
    
  }, []);
  LogBox.ignoreAllLogs();

  const copyToClipboard = () => {
    if (fullData.roomId) {
        Clipboard.setString(""+fullData.roomId);

        // Display a success message
        if (Platform.OS === 'android') {
            ToastAndroid.show('Text copied to clipboard!',
                ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert('Text copied to clipboard!');
        }
    }
};

  useEffect(() => {
    // Log roomDeets when it changes
    console.log("this is after setting roomDeets")
    console.log(roomDeets);
    
  }, [roomDeets]);

  
  return (
    <View>
       {isLoaded ? (<View style = {styles.containerCenter}>
        <View style = {styles.containerBox}>
      <Text style={{color:"#000080", fontWeight:'bold', textAlign:'center', fontSize:20, marginBottom:5 }}>{fullData.roomName}</Text>
      <TouchableOpacity onPress = {() => {copyToClipboard()}}><Text style={{color:"black", fontWeight:'bold', textAlign:'center', fontSize:13, marginBottom:5}}>{fullData.roomId}</Text><Text style = {{textAlign:'center', fontSize:10}}>(Copy)</Text></TouchableOpacity>
      </View>
      <Table details={roomDeets} roomId={roomId} history={paymentHistory} username={username}/>
    </View>) : (<View style = {styles.centerScreen}><ActivityIndicator/></View>)}
    </View>
    
  );
};

export default Group;
