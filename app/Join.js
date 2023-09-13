import React from "react";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import styles from "../styles/styles";
import {View, Text, TextInput, TouchableOpacity, Modal, Link} from "react-native";
const Join = () => {
    const navigation = useNavigation();
    const [roomId, setRoomId] = useState("");
    const [output, setOutput] = useState(true);
    const [outputText,setOutputText] = useState("Please wait...");
    const [modalVisible,setModalVisible] = useState(false);
    const [errorMessage,setErrorMessage] = useState(false);
    const [successMessage,setSuccessMessage] = useState(false);
    const [username,setUsername] = useState("");
    const params = useLocalSearchParams();
    useEffect(() => {
        const { username } = params;
        console.log(username);
        setUsername(username);
    }, []);
  
    async function joinGroupFunction(){
        try {
            const response = await fetch("https://payup-043m.onrender.com/addUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Set the content type to JSON
              },
              body: JSON.stringify({
                    newuser:username,
                    roomId:roomId
              }), // Convert the body to JSON format using JSON.stringify
            });

            if(response.status==500){
                setErrorMessage(true);
                setSuccessMessage(false);
                setOutput(true);
                setOutputText("The group does not exist! Enter a valid ID!");
            }
            else{
                setErrorMessage(false);
                setSuccessMessage(true);
                setOutput(true);
                setOutputText("You have successfully joined the group!");
            }
          } catch (error) {
            // Handle any errors that occur during the fetch
            console.log("Error");
          }
    }
  return (
    <View style = {{alignItems:'center', paddingTop: 20}}>
        <Text style = {styles.headingText}>Looking to join a group?</Text>
        <Text>Enter the 10 digit code provided by your friend!</Text>
        <View style={styles.wideContainerBox}>
        <Text> Group Name:</Text>
        <TextInput
          placeholder="Enter Group Name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => {
            setRoomId(e);
          }}
          value={roomId}
          style={styles.colorSearchBar}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.wideGreenButton}
        onPress={() => {
            setModalVisible(true);
          joinGroupFunction();
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", alignItems: "center" }}
        >
          JOIN GROUP
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="fade" // You can use 'slide', 'fade', or 'none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setOutputText("Please wait...");
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{outputText}</Text>
            {successMessage?(
                <View style={{flexDirection:'row'}}>
                {/* <TouchableOpacity style = {styles.smallButtons}><Text style = {{ color: "white", fontWeight: "bold", alignItems: "center" }}>Copy ID</Text></TouchableOpacity> */}
                <TouchableOpacity style= {styles.smallButtons} onPress={()=>{navigation.navigate("index")}}><Text style = {{ color: "white", fontWeight: "bold", alignItems: "center" }}>Done!</Text></TouchableOpacity>
                </View>
            ):(
                <View></View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Join;