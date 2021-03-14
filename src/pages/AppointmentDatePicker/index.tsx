import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import { useRoute, useNavigation } from '@react-navigation/native';
import { Platform, Alert } from 'react-native';
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
  providerId: string;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const AppointmentDatePicker: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as RouteParams;

  const [selectedProvider, setSelectedProvider] = useState<string>(
    params.providerId,
  );

  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      await api.post('appointments', {
        provider_id: selectedProvider,
      });

      navigation.navigate('AppointmentCreated');
    } catch (err) {
      Alert.alert(
        'Erro ao criar agendamento',
        'Ocorreu um erro ao tentar criar o agendamento, tente novamente!',
      );
    }
  }, [selectedProvider, navigation]);

  return (
    <>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Totem aqui</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
      <Container>
        <Tab.Navigator>
          <Tab.Screen name="A Fazer" component={TodoList} />
          <Tab.Screen name="Fazendo" component={DoingList} />
          <Tab.Screen name="Feito" component={DoneList} />
        </Tab.Navigator>
      </Container>
    </>
  );
};

export default AppointmentDatePicker;
