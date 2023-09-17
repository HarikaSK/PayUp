import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import axios from "axios";
import Payup from "./Payup";
import card from "../assets/card.jpg";
import create from "../assets/Drawer.png";
import wallet from "../assets/PayUpLogo1.png";
import Card from "./Card";
import Home from "./Home";
import Loading from "./Loading";
import styles from "../styles/styles";
import CreateGroup from "./CreateGroup";
import Create from "./Create";
import App from "./App";
import Login from "./Login"
import AsyncStorage from "@react-native-async-storage/async-storage";


const index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myRooms, setMyRooms] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [refreshing, setRefreshing] = useState(false);


  const loginFunction = async (uname) => {
    const userJSON = JSON.stringify({ username: uname, isLoggedIn: true })
    console.log(userJSON, "loginfunction")

    AsyncStorage.setItem('userData', userJSON)
      .then(async () => {
        console.log('User data saved to AsyncStorage');
        const Data = await AsyncStorage.getItem('userData')
        console.log(Data, "loginfuncCheck")

        setIsLoggedIn(true)
        setUsername(uname)

        fetcher(uname).then(() => {
          setIsLoaded(true);
        })

      })
      .catch((error) => {
        console.error('Error saving user data to AsyncStorage:', error);
      });


  }

  async function fetcher(name) {

    try {

      console.log(name, "in fetcher")
      const response = await fetch(
        "https://payup-043m.onrender.com/fetchRooms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({ username: name }), // Convert the body to JSON format using JSON.stringify
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json().then((res) => {
        setMyRooms(res);
        // console.log(res, "rooms")
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  const logoutFunction = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      setUsername('');
      setIsLoggedIn(false);
      console.log("logged out")
    }
    catch (error) {
      console.error('Error removing user data from AsyncStorage:', error);
    }
  }

  async function handleRefresh() {
    setRefreshing(true)
    await fetcher(username);
    // setMyRooms(updatedData);
    setRefreshing(false);
  }

  return (
    <SafeAreaView>
      {isLoggedIn ? (
        <View>
          <Stack.Screen
            options={{
              headerShadowVisible: true,
              headerTitle: "",
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "white",
              },
              headerLeft: () => <Payup img={wallet} logoutFunction={logoutFunction} />,
              headerRight: () => (
                <CreateGroup img={create} username={username} />
              ),
            }}
          />
        </View>
      ) : (
        <View>
          <Stack.Screen
            options={{
              headerShadowVisible: false,
              headerTitle: "",
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "white",
              },
              
            }}
          />
        </View>
      )}

      {isLoggedIn ? (
        isLoaded ? (
          <Home
            myRooms={myRooms}
            username={username}
            loadingState={isLoaded}
            onRefresh={handleRefresh} // Assuming you have a function to handle the refresh
            refreshing={refreshing} // A boolean state to track whether refreshing is in progress
          />
        ) : (
          <Loading />
        )
      ) : (
        <View>
          <Login loginFunction={loginFunction} />
        </View>

      )}
    </SafeAreaView>
  )

}

export default index;