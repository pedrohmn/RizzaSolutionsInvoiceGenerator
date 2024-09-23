import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './index';
import CreateInvoiceScreen from './CreateInvoiceScreen';
import InvoiceDetailsScreen from './InvoiceDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
          <Stack.Screen name="InvoiceDetails" component={InvoiceDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
