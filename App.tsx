import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LibraryScreen } from './src/screens/LibraryScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LibraryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="LibraryHome" component={LibraryScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SettingsHome" component={SettingsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#0ea5e9',
            tabBarInactiveTintColor: '#475569',
            tabBarIcon: ({ color, size }) => {
              const iconName = route.name === 'Library' ? 'albums' : 'settings';
              return <Ionicons name={iconName as never} size={size} color={color} />;
            }
          })}
        >
          <Tab.Screen name="Library" component={LibraryStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc'
  }
});
