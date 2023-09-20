import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dropdown,
 
  Button,
} from "react-native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Link } from "expo-router";
import styles from "../styles/styles";
import { useNavigation } from "expo-router";
import Modal from 'react-native-modal'
import { SafeAreaView } from "react-native-safe-area-context";
import { SlideInDown, SlideInLeft, SlideInRight, SlideOutRight, SlideOutUp } from "react-native-reanimated";

// import SideDrawer from './SideDrawer'



const CreateGroup = ({ img, username, logoutFunction }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const data = ["Create Group", "Join Group"];

  function createGroup() {
    navigation.navigate("Create", {
      data: { username: username },
    });
  }

  return (
    <View style={{marginRight:"7%"}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}><Image  source={img} resizeMode="cover" style={styles.drawerStyle}/></TouchableOpacity>
      <Modal
        // animationType="slide" // You can use 'slide', 'fade', or 'none'
        transparent={true}
        isVisible={modalVisible}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        style={styles.sideDrawBackground}
      >
        <View style={styles.sideDrawContainer}>
          <View style={styles.modalContent}>
            <Text style={{ color: "#4682b4", fontWeight: "bold", alignItems: "center" }}>Welcome, {username}</Text>
          <View style={styles.breakSpace2}></View>
            <Link
              onPress={()=>{setModalVisible(false)}}
              href={{
                pathname: "/Create",
                params: { username: username },
              }}
              // style = {styles.greenContainerBox}
            ><Text style={{ color: "#000080", fontWeight: "bold", alignItems: "center" }}>CREATE GROUP</Text></Link>
            <View style={styles.breakSpace2}></View>
            <Link
              onPress={()=>{setModalVisible(false)}} 
              href={{
                pathname: "/Join",
                params: { username: username },
              }}
              // style = {styles.blueContainerBox}
            ><Text style={{ color: "#000080", fontWeight: "bold", alignItems: "center" }}>JOIN GROUP</Text></Link>
            
            <View style={styles.breakSpace2}></View>
            <TouchableOpacity onPress={()=>{setModalVisible(false);  logoutFunction(); }}><Text style={{ color: "#000080", fontWeight: "bold", alignItems: "center" }}>LOG OUT</Text></TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );

  // const [drawer, setDrawer] = useState(false)

  // const DrawerFunc = () =>{
  //   console.log("drawer clicked")
  //   setDrawer(true)
  // }

  // return(
  //   <View>
  //     <TouchableOpacity onPress={()=>{
  //       DrawerFunc();
  //     }}>
  //     <Image  source={img} resizeMode="cover" style={styles.drawerStyle}/>
  //     </TouchableOpacity>
  //     {drawer ? 
  //     (<SideDrawer />) : (<View></View>)}
  //   </View>
  // )

};



export default CreateGroup;


