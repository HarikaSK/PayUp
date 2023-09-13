import React from 'react'
import {View,Text} from 'react-native';
import styles from '../styles/styles';
const Credits = ({route}) => {

  return (
    <View style = {styles.containerCenter}>
        <Text style = {styles.headingText}>Enjoying PayUp? Leave a review!</Text>
        <Text >Developed by Nikhil Agastya, Manasa Adusumilli, Harika Kopalle & Pranav Dhulipala</Text>
    </View>
  )
}

export default Credits;