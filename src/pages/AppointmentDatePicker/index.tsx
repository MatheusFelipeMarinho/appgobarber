import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import TodoList from '../../components/TodoList';
import DoingList from '../../components/DoingList';
import DoneList from '../../components/DoneList';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface RouteParams {
  DeviceId: string;
  DeviceName: string;
}

export interface Device {
  id: string;
  oid: String;
  name: string;
  created_at: Date;
  updated_at: Date;
}

const AppointmentDatePicker: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as RouteParams;

  const deviceName = params.DeviceName;

  const [device, setDevice] = useState<Device>();

  useEffect(() => {
    api.get('device/' + params.DeviceId).then((response) => {
      console.log(response.data);
      setDevice(response.data);
    });
  }, [setDevice]);

  return (
    <>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>{deviceName}</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
      <Container>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showIcon: true,
          }}
        >
          <Tab.Screen name="A Fazer" component={TodoList} />
          <Tab.Screen name="Fazendo" component={DoingList} />
          <Tab.Screen name="Feito" component={DoneList} />
        </Tab.Navigator>
      </Container>
    </>
  );
};

export default AppointmentDatePicker;
