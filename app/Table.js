import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { DataTable } from 'react-native-paper';
import styles from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const Table = ({ details, roomId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [toPayList, setToPayList] = useState({});
  const [toBePaidList, setToBePaidList] = useState({});
  const [amount, setAmount] = useState(''); // Initialize amount as an empty string
  const [notes, setNotes] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [pay, setPay] = useState(''); // Initialize pay as an empty string
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    try {
      const temp = JSON.parse(details);
      const updatedToPayList = temp.toPay.drakeswd;
      const updatedToBePaidList = temp.toBePaid.drakeswd;
      setToPayList(updatedToPayList);
      setToBePaidList(updatedToBePaidList);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error parsing details:', error);
    }
  }, [details]);

  async function PayUp() {
    try {
      const response = await fetch('https://payup-043m.onrender.com/payup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: roomId,
          sender: 'drakeswd',
          receiver: receiver,
          amount: parseFloat(pay), // Parse pay as a float
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        console.log('Data sent successfully');
        setModalVisible(false);
        // You might want to update some state here to reflect the payment status
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <ScrollView>
      <View style={styles.containerBox}>
        <Text> Split expense:</Text>
        <TextInput
          placeholder="Enter Split Amount"
          keyboardType="numeric" // Set keyboardType to numeric
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setAmount(text)} // Use onChangeText instead of onChange
          value={amount}
          style={styles.theBetterSearchBar}
        ></TextInput>

        <Text> Description of Expense:</Text>
        <TextInput
          placeholder="Enter Notes"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setNotes(text)} // Use onChangeText instead of onChange
          value={notes}
          style={styles.theBetterSearchBar}
        ></TextInput>

        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            // You can add your logic here for generating the split
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center' }}>
            GENERATE SPLIT
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text> Enter Amount:</Text>
            <TextInput
              placeholder="Enter Amount"
              keyboardType="numeric" // Set keyboardType to numeric
              onChangeText={(text) => setPay(text)} // Use onChangeText instead of onChange
              value={pay}
              style={styles.theBetterSearchBar}
            ></TextInput>
            <TouchableOpacity style={styles.wideGreenButton} onPress={PayUp}>
              <Text>PayUp!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* TO PAY */}
      <View style={styles.containerBox}>
        {isLoaded ? (
          <View style={{}}>
            <Text style={styles.headingText}>To Pay</Text>

            <DataTable style={styles.table}>
              {/* DataTable content */}
            </DataTable>
            <View style={styles.breakSpace}></View>

            {/* TO BE PAID */}
            <Text style={styles.headingText}>To Be Paid</Text>

            <DataTable style={styles.table}>
              {/* DataTable content */}
            </DataTable>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </ScrollView>
  );
};

export default Table;
