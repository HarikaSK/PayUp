import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Credits = ({route}) => {
  async function handleLogout() {
    try {
      // Remove the 'userData' item from AsyncStorage
      await AsyncStorage.removeItem('userData');
      // Update the isLoggedIn state to false
      setIsLoggedIn(false);
      // Additional logout logic as needed
      
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return (
    <View style = {styles.containerCenter}>
        
        <Text style = {styles.headingText}>Enjoying PayUp? Leave a review!</Text>
        <Text >Developed by Nikhil Agastya, Manasa Adusumilli, Harika Kopalle & Pranav Dhulipala</Text>
    </View>
  )
}

export default Credits;