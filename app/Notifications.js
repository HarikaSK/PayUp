import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dropdown,
   ScrollView,
    Button,
  } from "react-native";
  import { useState, useEffect} from "react";
  import { useNavigation } from "expo-router";
  import { useLocalSearchParams } from "expo-router";
  import styles from "../styles/styles"
import { ActivityIndicator } from "react-native-paper";

  

  const Notifications = () => {
    const navigation = useNavigation();
    const [data,setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [username,setUsername] = useState("");
    const [flag,setFlag] = useState(0);
    const params = useLocalSearchParams();
    useEffect(() => {
        const {username} = params;
        fetchUserDetails(username).then(() => {
          setIsLoaded(true);
          console.log(data);
          setUsername(username);
        });
      }, []);

      useEffect(()=>{

      },[username])

      const ack = async (id) => {
        try {
            const response = await fetch(
          "https://payup-043m.onrender.com/ack",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify({ username: username, id: id }), // Convert the body to JSON format using JSON.stringify
          }

        );
        setFlag(1);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      }

      async function fetchUserDetails(name) {

        try {
              const response = await fetch(
            "https://payup-043m.onrender.com/fetchNotifs",
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
            setData(res);
            // console.log(res, "rooms")
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }

    return(
        <View style = {styles.whiteBackground}>
        {isLoaded?(<View style={styles.container_History}>
          {data.length>0 ? 
          (<View>
            <Text style={styles.headingText_History}>Notifications</Text>
            
            <View style={styles.breakSpace2}></View>
             <ScrollView>
              {data.map((key,index)=>(
                <View key={index} style={styles.containerBox}>
                    <Text style={{fontSize:15, fontWeight:'bold', color:"black"}}>{key.description}</Text>
                    <Text>Room Id: {key.roomId}</Text>
                    <Text>Amount: {key.amount}</Text>
                    <View style={{marginTop:10}}></View>
                    {key.status?(<TouchableOpacity style = {styles.greenButton} ><Text style = {styles.buttonText}>Done!</Text></TouchableOpacity>):(<TouchableOpacity style = {styles.smallButtons} onPress = {() =>{ack(key.id)}}><Text>Ack!</Text></TouchableOpacity>)}
                </View>
                
              ))}
             </ScrollView>
          </View>) : (<View><Text>Make your first payment!</Text></View>)}
        </View>):(<View><ActivityIndicator/></View>)}
        
        </View>
    );
  }

  export default Notifications;