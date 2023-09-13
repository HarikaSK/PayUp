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
import create from "../assets/create2.jpg";
import wallet from "../assets/wallet.jpg";
import Card from "./Card";
import Home from "./Home";
import Loading from "./Loading";
import styles from "../styles/styles";
import CreateGroup from "./CreateGroup";
import Create from "./Create";
import App from "./App";
const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [myRooms, setMyRooms] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  function createGroup() {
    navigation.navigate("Create");
  }

  async function handleRefresh(){
    setRefreshing(true)
    await fetcher("drakeswd");
    // setMyRooms(updatedData);
    setRefreshing(false);
  }

  async function fetcher(name) {
    try {
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
      }); // Parse the response body as JSO
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    const name = "drakeswd";
    fetcher(name).then((temp) => {
      setIsLoaded(true);
      setUsername(name);
    });
  }, []);

  useEffect(() => {}, []);

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
              headerLeft: () => <Payup img={wallet} />,
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
              headerShadowVisible: true,
              headerTitle: "",
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "white",
              },
              headerLeft: () => <Payup img={wallet} />,
            }}
          />
        </View>
      )}

      {isLoaded ? (
        isLoggedIn ? (
          <Home
            myRooms={myRooms}
            username={username}
            loadingState={isLoaded}
            onRefresh={handleRefresh} // Assuming you have a function to handle the refresh
            refreshing={refreshing} // A boolean state to track whether refreshing is in progress
          />
        ) : (
          <View>
            <Text style={styles.headingText}>Pleaase login first</Text>
          </View>
        )
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

// const MyStack = () =>{
//   return(
//     <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name = "Home"/>
//         </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default Index;
