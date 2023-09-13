import React from 'react'
import styles from "../styles/styles"
import {View,Text,ActivityIndicator} from 'react-native';
const Loading = () => {
  return (
    <View style = {styles.centerScreen}>
        <ActivityIndicator size="large" color="green" />
    </View>
  )
}

export default Loading