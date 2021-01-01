import React, { useState,useEffect } from 'react'
import { Text, View , StyleSheet, ActivityIndicator} from 'react-native';
import MainNavigation from './navigation/mainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = ()=> {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    )
  }

export default App;
