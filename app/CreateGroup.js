import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dropdown,
  Modal,
  Button,
} from "react-native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Link } from "expo-router";
import styles from "../styles/styles";
import { useNavigation } from "expo-router";
import Login from "./index"
// import SideDrawer from './SideDrawer'



const CreateGroup = ({ img, username }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const data = ["Create Group", "Join Group"];

  function createGroup() {
    navigation.navigate("Create", {
      data: { username: username },
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}><Image  source={img} resizeMode="cover" style={styles.drawerStyle}/></TouchableOpacity>
      <Modal
        animationType="fade" // You can use 'slide', 'fade', or 'none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Link
              onPress={()=>{setModalVisible(false)}}
              href={{
                pathname: "/Create",
                params: { username: username },
              }}
              style = {styles.greenContainerBox}
            ><Text style={{ color: "white", fontWeight: "bold", alignItems: "center" }}>CREATE GROUP</Text></Link>
              <Text style = {{margin:5}}>(or)</Text>
            <Link
              onPress={()=>{setModalVisible(false)}} 
              href={{
                pathname: "/Join",
                params: { username: username },
              }}
              style = {styles.blueContainerBox}
            ><Text style={{ color: "white", fontWeight: "bold", alignItems: "center" }}>JOIN GROUP</Text></Link>
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


