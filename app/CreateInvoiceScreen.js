import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const CreateInvoiceScreen = () => {
  const router = useRouter();
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  };
  
  const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : [];
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  };

  const createInvoice = () => {
    const newInvoice = {
      id: Math.random().toString(36).substr(2, 9),
      clientName,
      amount,
      description,
      date: new Date(),
    };
    getItem("invoices").then((invoices) => {
      setItem("invoices", [...invoices, newInvoice]);
    });
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Client Name"
        value={clientName}
        onChangeText={setClientName}
        style={{ marginBottom: 20, borderBottomWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ marginBottom: 20, borderBottomWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 20, borderBottomWidth: 1, padding: 10 }}
      />
      <Button title="Create Invoice" onPress={createInvoice} />
    </View>
  );
};

export default CreateInvoiceScreen;