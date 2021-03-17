import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Alert } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  DoneListFlat,
  DoneListInfo,
  DoneListContainer,
  DoneListName,
  DoneListMeta,
  DoneListMetaText,
  DoneListButton,
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

const DoneList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  // const params = route.params as RouteParams;

  useEffect(() => {
    api.get('orders/list/done').then((response) => {
      setOrders(response.data.data);
    });
  }, []);

  const handleTodoOrder = useCallback(
    async (orderId) => {
      try {
        await api.patch(`orders/${orderId}/do`),
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
    navigation.navigate('done', { id: orderId });
  }

  return (
    <Container>
      <DoneListFlat
        data={orders}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item: order }) => (
          <DoneListContainer
            onPress={() => {
              navigateToCard(order.id);
            }}
          >
            <Icon name="alert-circle" size={14} color="#EB5757" />
            <DoneListInfo>
              <DoneListName>{order.title}</DoneListName>
              <DoneListMeta>
                <Icon name="calendar" size={14} color="#252525" />
                <DoneListMetaText>{order.created_at}</DoneListMetaText>
              </DoneListMeta>
            </DoneListInfo>
            <DoneListMeta>
              <DoneListButton
                onPress={() => {
                  handleTodoOrder(order.id);
                }}
              >
                <ButtonText>Devolver</ButtonText>
              </DoneListButton>
            </DoneListMeta>
          </DoneListContainer>
        )}
      />
    </Container>
  );
};

export default DoneList;
