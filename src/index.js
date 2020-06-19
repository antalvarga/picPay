import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';

// Aula2 - 4:11 
// Evitar que a barra de notificações fique totalmente preta
import { StatusBar } from 'react-native';

// Aula1 - 0:12:48  
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Aula2 - 4:29
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};
