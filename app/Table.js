import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ActivityIndicator, DataTable } from 'react-native-paper';
import styles from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';


const Table = ({ details }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [toPayList, setToPayList] = useState({}); // Initialize toPayList as a state variable
    const [toBePaidList, setToBePaidList] = useState({});
    const [amount,setAmount] = useState(0);
    useEffect(() => {
        const temp = JSON.parse(details);
        const updatedToPayList = temp.toPay.drakeswd;
        const updatedToBePaidList = temp.toBePaid.drakeswd;
        setToPayList(updatedToPayList); // Set the toPayList state variable
        setToBePaidList(updatedToBePaidList)
        setIsLoaded(true);
    }, [details]); // Add details as a dependency

    return (
      <ScrollView>  
        <View style={styles.containerBox}>
        <Text> Split expense:</Text>
        <TextInput
          placeholder="Enter Split Amount"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => {
            setAmount(e);
          }}
          value={amount}
          style={styles.theBetterSearchBar}
        ></TextInput>
        <Text> Description of Expense:</Text>
        <TextInput
          placeholder="Enter Notes"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => {
            setAmount(e);
          }}
          value={amount}
          style={styles.theBetterSearchBar}
        ></TextInput>
        <TouchableOpacity
        style={styles.greenButton}
        onPress={() => {
        }}
      > 
        <Text
          style={{ color: "white", fontWeight: "bold", alignItems: "center" }}
        >
          GENERATE SPLIT
        </Text>
      </TouchableOpacity>
      </View>
        <View style={styles.containerBox}>
            {isLoaded ? (
                <View style={{}}>
                    <Text style = {styles.headingText}>To Pay</Text>
                    <DataTable style={styles.table}>
                        <DataTable.Header style={styles.header}>
                            <DataTable.Title style={styles.theBestText}>
                            <Text style={styles.theBestText}>Pay</Text>
                            </DataTable.Title>
                            <DataTable.Title style = {{marginRight:100}} >
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
                            <View style = {styles.breakSpace}></View>
                    <Text style = {styles.headingText}>To Be Paid</Text>

                    <DataTable style={styles.table}>
                        <DataTable.Header style={styles.header}>
                            <DataTable.Title>
                            <Text style={styles.theBestText}>Username</Text>
                            </DataTable.Title>
                            <DataTable.Title style = {{marginRight:100}} >
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
                                            <Text style={styles.cellText}>{toPayList[key]}</Text>
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

            {/* {//To Be Paid} */}
            
        </View>
    </ScrollView>
    );
};

export default Table;
