import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
const router = useRouter();
const [invoices, setInvoices] = useState([]);

useEffect(() => {
  getItem("invoices").then((invoices) => {
    setInvoices(invoices);
  });
}, [])

const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : [];
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Create Invoice" onPress={() => router.push('/CreateInvoiceScreen')} />
      <FlatList
        data={invoices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Invoice: {item.id}</Text>
            <Button title="View Details" onPress={() => router.push({pathname: '/InvoiceDetailsScreen', params: { invoice: item.id }})} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;