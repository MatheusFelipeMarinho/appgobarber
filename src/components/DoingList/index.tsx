import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Alert } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  DoingListFlat,
  DoingListInfo,
  DoingListContainer,
  DoingListName,
  DoingListMeta,
  DoingListMetaText,
  DoingListButton,
  ButtonText,
} from './styles';

export interface Order {
  id: Number;
  contract_id: Number;
  device_id: Number;
  title: String;
  code: String;
  description: String;
  priority: Number;
  closed_automatically: Number;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

interface RouteParams {
  params: {
    DeviceId: string;
    DeviceName: string;
  };
}

const DoingList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as RouteParams;
  // const params = route.params as RouteParams;

  useEffect(() => {
    api.get('orders/list/doing/' + params.params.DeviceId).then((response) => {
      setOrders(response.data.data);
    });
  }, []);

  const handleDoneOrder = useCallback(
    async (orderId) => {
      try {
        await api.patch(`orders/${orderId}/close`),
          navigation.navigate('AppointmentCreated');
      } catch (err) {
        Alert.alert(
          'Erro ao Iniciar Ordem',
          'Ocorreu um erro ao tentar iniciar está Ordem, tente novamente!',
        );
      }
    },
    [setOrders, navigation],
  );

  function navigateToCard(orderId: Number) {
    navigation.navigate('doing', { id: orderId });
  }

  return (
    <Container>
      <DoingListFlat
        data={orders}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item: order }) => (
          <DoingListContainer
            onPress={() => {
              navigateToCard(order.id);
            }}
          >
            <Icon name="alert-circle" size={14} color="#EB5757" />
            <DoingListInfo>
              <DoingListName>{order.title}</DoingListName>
              <DoingListMeta>
                <Icon name="calendar" size={14} color="#252525" />
                <DoingListMetaText>{order.created_at}</DoingListMetaText>
              </DoingListMeta>
            </DoingListInfo>
            <DoingListMeta>
              <DoingListButton
                onPress={() => {
                  handleDoneOrder(order.id);
                }}
              >
                <ButtonText>Finalizar</ButtonText>
              </DoingListButton>
            </DoingListMeta>
          </DoingListContainer>
        )}
      />
    </Container>
  );
};

export default DoingList;
