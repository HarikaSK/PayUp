import {View,Text, Image,TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import { useNavigation } from 'expo-router';
const Payup = ({img, logoutFunction}) => {
  const navigation = useNavigation();
  function creditsPage(){
    // navigation.navigate("Credits");
    logoutFunction();
  }
  return (
    <TouchableOpacity onPress = {creditsPage}>
        <Image source = {img} resizeMode = "cover" style = {styles.logoStyle}/>
    </TouchableOpacity>
  )
}

export default Payup