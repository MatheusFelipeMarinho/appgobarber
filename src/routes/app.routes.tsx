import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Done from '../pages/Done';
import Doing from '../pages/Doing';
import Todo from '../pages/Todo';
import AppointmentCreated from '../pages/AppointmentCreated';
import AppointmentDatePicker from '../pages/AppointmentDatePicker';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EAEAEA' },
    }}
  >
    <App.Screen name="dashboard" component={Dashboard} />
    <App.Screen name="todo" component={Todo} />
    <App.Screen name="doing" component={Doing} />
    <App.Screen name="done" component={Done} />

    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
    <App.Screen
      name="AppointmentDatePicker"
      component={AppointmentDatePicker}
    />
  </App.Navigator>
);

export default AppRoutes;
