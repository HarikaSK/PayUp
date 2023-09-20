import React, { useState } from 'react';
import { View,Image, Text, TextInput, Link, Modal} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "expo-router";
import wallet from "../assets/PayUpLogo1.png";

const Login = ({loginFunction}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [registered, setRegistered] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [modalVisible,setModalVisible] = useState(false)

    const [wrongpwd, setWrongpwd] = useState(false)
    const [userNotFound, setUserNotFound] = useState(false)

    // async function setAsyncStorage(isLoggedInVal){
    //     const userJSON = JSON.stringify({ username: username, isLoggedIn: isLoggedInVal })
    //             console.log("in setAsyncStorage")
    //             console.log(isLoggedIn)
    //             await AsyncStorage.setItem('userData', userJSON)
    //                 .then(() => {
    //                     console.log('User data saved to AsyncStorage');
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error saving user data to AsyncStorage:', error);
    //                 });
    // }

    const navigation = useNavigation();

    async function handleLogin() {
        try {
            const response = await fetch(
                "https://payup-043m.onrender.com/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // Set the content type to JSON
                    },
                    body: JSON.stringify({ username: username, password: password }), // Convert the body to JSON format using JSON.stringify
                }
            );

            if (response.status == 200) {
                setIsLoggedIn(true)
                loginFunction(username);
                setModalVisible(true)
                
                setWrongpwd(false)
                setUserNotFound(false)
                //async storage - username, isloggedin

                //check index.js loginFunction for the code
                // await setAsyncStorage(true); 

                console.log("login successful")

                // navigate("/index"); //not working
            }
            if (response.status == 201) {
                setWrongpwd(true);
                setUserNotFound(false);
                console.log("wrong password")
            }
            if (response.status == 202) {
                setUserNotFound(true)
                setWrongpwd(false)
                console.log("user not found")
            }


        } catch (error) {
            console.error("Error loggin in:", error);
        }
    }

    
    async function handleRegister(){
        try {
            const response = await fetch(
                "https://payup-043m.onrender.com/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // Set the content type to JSON
                    },
                    body: JSON.stringify({ username: username, password: password, email: email }), // Convert the body to JSON format using JSON.stringify
                }
            );

            if(!response.ok){
                throw new Error("Network response was not ok");
            }

            setRegistered(true)

        } catch (error) {
            console.error("Error registering:", error);
        }
    }


    return (
        <View style={styles.containerCenter2}>
            <View style = {styles.centerRow}><Image source={wallet} style={styles.loginlogo}/></View>
            {registered == true ?
                (
                    <View>
                        <View><Text style={{textAlign:"center", color:"#00008b", fontWeight:"bold", fontSize:30, marginTop:"-5%"}}>Welcome back!</Text></View>
                        <View style={styles.containerBox}>

                            <Text> Username:</Text>
                            <TextInput
                                placeholder="Enter Username"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(e) => {
                                    setUsername(e);
                                }}
                                style={styles.inputbox}
                                value={username}
                            ></TextInput>

                            <Text> Password:</Text>
                            <TextInput
                                placeholder="Enter Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(e) => {
                                    setPassword(e);
                                }}
                                style={styles.inputbox}
                                value={password}
                            ></TextInput>

                            {wrongpwd ? 
                              (<View><Text style={{color:"red", textAlign:"center", fontSize:13, marginBottom: 5}}>Wrong password. Please try again.</Text></View>) :
                              (<View></View>)
                            }

                            {userNotFound ?
                               (<View><Text style={{color:"red", textAlign:"center", fontSize:13, marginBottom: 5}}>User not found.</Text></View>) :
                               (<View></View>)
                                }

                                {/* <Text style={{color:"red", textAlign:"center", fontSize:13, marginBottom: 5}}>User not found.</Text> */}
                            
                            

                            <TouchableOpacity style={styles.extraButton} onPress={() => { handleLogin(); }}><Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center' }}>Login</Text></TouchableOpacity>
                            <Text style={{textAlign:"center", margin:10}}>Don't have an account? <Text style={{color:"blue"}} onPress={()=>{setRegistered(false)}}>Register</Text></Text>
                        </View></View>
                ) :
                (<View>
                    <View>
                        <View><Text style={{textAlign:"center", color:"#00008b", fontWeight:"bold", fontSize:30, marginTop:"-5%"}}>Sign up!</Text></View>
                        <View style={styles.containerBox}>
                         
                            <Text> Username:</Text>
                            <TextInput
                                placeholder="Enter Username"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(e) => {
                                    setUsername(e);
                                }}
                                style={styles.inputbox}
                                value={username}
                            ></TextInput>
                            
                            <Text> Password:</Text>
                            <TextInput
                                placeholder="Enter Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(e) => {
                                    setPassword(e);
                                }}
                                style={styles.inputbox}
                                value={password}
                            ></TextInput>

                            <Text> E-mail:</Text>
                            <TextInput
                                placeholder="Email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(e) => {
                                    setEmail(e);
                                }}
                                style={styles.inputbox}
                                value={email}
                            ></TextInput>

                            <TouchableOpacity style={styles.extraButton} onPress={() => { handleRegister(); }}><Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center' }}>Register</Text></TouchableOpacity>
                            <Text style={{textAlign:"center", margin:10}}>Have an account already? <Text style={{color:"blue"}} onPress={()=>{setRegistered(true)}}>Log in</Text></Text>
                        </View></View>
                </View>)}
                <Text style={{textAlign:"center", marginTop:7, fontSize:11}}>Developed by</Text>
                <Text style={{textAlign:"center", marginTop:2, fontSize:11}}> Pranav Dhulipala, Harika Kopalle, Nikhil Agastya & Manasa Adusumilli </Text>


        </View>
    )
};



export default Login;
