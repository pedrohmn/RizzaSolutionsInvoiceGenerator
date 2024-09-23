import { React, useState, useEffect } from 'react';
import { View, Text, Button, Share } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InvoiceDetailsScreen = () => {
  const {invoice} = useLocalSearchParams();
  const [selectedInvoice, setSelectedInvoice] = useState('');

  useEffect(() => {
    getItem(invoice).then((invoice) => {
      setSelectedInvoice(invoice);
    });
  }, [])

  const getItem = async (invoiceid) => {
    try {
      const value = await AsyncStorage.getItem("invoices");
      const invoices = value != null ? JSON.parse(value) : [];
      const invoice = invoices.filter(e => e.id == invoiceid)
      return invoice.length > 0 ? invoice[0] : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Client Name: {selectedInvoice?.clientName}</Text>
      <Text>Amount: {selectedInvoice?.amount}</Text>
      <Text>Description: {selectedInvoice?.description}</Text>
      <Text>Date: {selectedInvoice?.date ? new Date(selectedInvoice.date).toDateString() : ''}</Text>
    </View>
  );
};

export default InvoiceDetailsScreen;