import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { View, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OSDemo from './services/Notifications/OSDemo';
import AppProvider from './hooks';

import Routes from './routes';

//a23a2e59-b8ff-4096-a7a4-73e4869ee2e2

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#28262e" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#fcfbff' }}>
          <Routes />
          <OSDemo name="OneSignal" />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
