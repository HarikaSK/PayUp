import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { ActivityIndicator, DataTable } from 'react-native-paper';
import styles from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Table = ({ details, roomId, history, username }) => {
    const rid = roomId;
    const [isLoaded, setIsLoaded] = useState(false);
    const [toPayList, setToPayList] = useState({}); // Initialize toPayList as a state variable
    const [toBePaidList, setToBePaidList] = useState({});
    var [amount, setAmount] = useState(0);
    const [notes,setNotes] = useState("");
    const [modalVisible, setModalVisible] = useState(false)
    var [pay, setPay] = useState(0);
    const [receiver, setReceiver] = useState("")
    const [listModalVisible,setListModalVisible] = useState(false)
    const [paymentHistory,setPaymentHistory] = useState([])
    

    useEffect(() => {
      
        const temp = JSON.parse(details, "table details");
        const updatedToPayList = temp.toPay[username];
        const updatedToBePaidList = temp.toBePaid[username];
        console.log(username, "username in table")
        console.log("room id is: ")
        console.log(roomId)
        console.log("history is:")
        console.log(history)
        setToPayList(updatedToPayList); // Set the toPayList state variable
        setToBePaidList(updatedToBePaidList)
        setPaymentHistory(paymentHistory)
        console.log(updatedToPayList, "updated topay list")
        console.log(updatedToBePaidList, "updated tobepaid list")
        console.log(paymentHistory, "payment history")
        setIsLoaded(true);
    }, []); // Add details as a dependency
    
    useEffect(()=>{

    },[modalVisible])
    
    //payup function
    async function PayUp() {
        try {
          console.log("rid: "+roomId+" ,receiver: "+receiver+" ,amount: "+pay)
          const response = await fetch("https://payup-043m.onrender.com/payup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify({
              roomId: rid,
              sender: username,
              receiver: receiver ,
              amount: pay,
              
            }), // Convert the body to JSON format using JSON.stringify
          });
          // response=response.json();
          // console.log(response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            console.log("data sent successdully");
          }
          
        
        } catch (error) {
          // Handle any errors that occur during the fetch
          console.error("Error fetching table data:", error);
        }
        // navigation.navigate("index");
      }
      
      
      //split function
      async function Split() {
        try {

          const response = await fetch("https://payup-043m.onrender.com/split", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify({
              roomId: rid,
              username: username,
              amount: amount,
              description: notes
            }), // Convert the body to JSON format using JSON.stringify
          });
          // response=response.json();
          // console.log(response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            console.log("split successfull");
          }
          
        
        } catch (error) {
          // Handle any errors that occur during the fetch
          console.error("Error performing split:", error);
        }
        // navigation.navigate("index");
      }
      

      
      
      

    return (
        <ScrollView>
            <View style={styles.containerBox}>
                <Text> Split expense:</Text>
                <TextInput placeholder="Enter Split Amount" autoCapitalize="none" keyboardType='numeric' autoCorrect={false} onChangeText={(e) => {setAmount(e);}} value={amount} style={styles.theBetterSearchBar}></TextInput>
                
                <Text> Description of Expense:</Text>
                <TextInput placeholder="Enter Notes" autoCapitalize="none" autoCorrect={false}  onChangeText={(e) => {setNotes(e);}} value={notes} style={styles.theBetterSearchBar}></TextInput>
                
                <TouchableOpacity style={styles.greenButton} onPress={()=>{Split()}}>
                    <Text style={{ color: "white", fontWeight: "bold", alignItems: "center" }}> 
                        GENERATE SPLIT
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal
        animationType="fade" // You can use 'slide', 'fade', or 'none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.payupModalContainer}>
          <View style={styles.payupModalContent}>
          <Text> Enter Amount:</Text>
          <TextInput placeholder="Enter Amount" keyboardType="numeric" onChangeText={(e) => {console.log("pay= "+e); setPay(e);}} value={pay} style={styles.theBetterSearchBar}></TextInput>
          <TouchableOpacity style={styles.wideGreenButton} onPress={()=>{PayUp(); setModalVisible(false)}}><Text>PayUp!</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

            {/* TO PAY */}
            <View style={styles.containerBox}>
                {isLoaded ? (
                    <View style={{}}>
                        <Text style={styles.headingText}>To Pay</Text>
                       
                        <DataTable style={styles.table}>
                            <DataTable.Header style={styles.header}>
                                <DataTable.Title style={styles.theBestText}>
                                    <Text style={styles.theBestText}>Pay</Text>
                                </DataTable.Title>
                                <DataTable.Title style={{ marginRight: 100 }} >
                                    <Text style={styles.leftText}>Amount</Text>
                                </DataTable.Title>
                            </DataTable.Header>

                            {Object.keys(toPayList).length > 0 ? (
                                Object.keys(toPayList).map((key, index) => (
                                    <View key={index} style={styles.rowContainer}>
                                        <DataTable.Row style={styles.row}>
                                            <DataTable.Cell>
                                                <Text style={styles.cellText}>{key}</Text>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <Text style={styles.cellText}>{toPayList[key]}</Text>
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                        <TouchableOpacity
                                            style={styles.payGreenButton}
                                            onPress={() => {
                                                // Handle button click
                                                setModalVisible(true);
                                                setReceiver(key);
                                            }}
                                        >
                                            <Text style={styles.buttonText}>Pay</Text>
                                        </TouchableOpacity>

                                    </View>

                                ))
                            ) : (
                                <View></View>
                            )}
                        </DataTable>
                        <View style={styles.breakSpace}></View>


                        {/* TO BE PAID */}
                        <Text style={styles.headingText}>To Be Paid</Text>

                        <DataTable style={styles.table}>
                            <DataTable.Header style={styles.header}>
                                <DataTable.Title>
                                    <Text style={styles.theBestText}>Username</Text>
                                </DataTable.Title>
                                <DataTable.Title style={{ marginRight: 100 }} >
                                    <Text style={styles.theBestText}>Amount</Text>
                                </DataTable.Title>
                            </DataTable.Header>

                            {Object.keys(toBePaidList).length > 0 ? (
                                Object.keys(toBePaidList).map((key, index) => (
                                    <View key={index} style={styles.rowContainer}>
                                        <DataTable.Row style={styles.row}>
                                            <DataTable.Cell>
                                                <Text style={styles.cellText}>{key}</Text>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <Text style={styles.cellText}>{toBePaidList[key]}</Text>
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                        <TouchableOpacity
                                            style={styles.ackBlueButton}
                                            onPress={() => {
                                                // Handle button click
                                                
                                            }}
                                        >
                                            <Text style={styles.buttonText}>Ack</Text>
                                        </TouchableOpacity>

                                    </View>

                                ))
                            ) : (
                                <View></View>
                            )}
                        </DataTable>
                    </View>
                ) : (
                    <View></View>
                )}

                

            </View>

        <View style={styles.containerBox}>
        {/* PAY HISTORY */}
         <TouchableOpacity style={styles.extraButton} onPress={() => { setListModalVisible(true) }}><Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center' }}>View Payments</Text></TouchableOpacity>
       </View>
       

       {/* PAYMENT HISTORY MODAL */}
       <Modal animationType="fade"
         transparent={false}
         visible={listModalVisible}
         onRequestClose={() => {
           setListModalVisible(false);
         }}>
         {/* fetch - print - user - desc - amt */}
        <View style={styles.container_History}>
          {history.length>0 ? 
          (<View>
            <Text style={styles.headingText_History}>PAYMENT HISTORY</Text>
            <View style={styles.breakSpace2}></View>
             <ScrollView>
              {history.map((key,index)=>(
                <View key={index} style={styles.containerBox}>
                    <Text>{key}</Text>

                </View>
              ))}
             </ScrollView>
          </View>) : (<View><Text>Make your first payment!</Text></View>)}
        </View>
       </Modal>

       

       

        </ScrollView>

        

    );
};

export default Table;