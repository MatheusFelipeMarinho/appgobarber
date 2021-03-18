import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Alert, ScrollView } from 'react-native';
import { LogBox } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  TodoListFlat,
  TodoListInfo,
  TodoListContainer,
  TodoListName,
  TodoListMeta,
  TodoListMetaText,
  TodoListButton,
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
interface Props {
  DeviceId: string;
  DeviceName: string;
}

const TodoList: React.FC<Props> = ({ DeviceId, DeviceName }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const { user } = useAuth();

  const route = useRoute();

  const navigation = useNavigation();

  const params = route.params as RouteParams;

  useEffect(() => {
    console.log(params);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    api.get('orders/list/todo/' + params.params.DeviceId).then((response) => {
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
    navigation.navigate('todo', { id: orderId });
  }

  return (
    <Container>
      <TodoListFlat
        data={orders}
        keyExtractor={(order) => order.id.toString()}
        renderItem={({ item: order }) => (
          <TodoListContainer
            onPress={() => {
              navigateToCard(order.id);
            }}
          >
            <Icon name="alert-circle" size={14} color="#EB5757" />
            <TodoListInfo>
              <TodoListName>{order.title}</TodoListName>
              <TodoListMeta>
                <Icon name="calendar" size={14} color="#252525" />
                <TodoListMetaText>{order.created_at}</TodoListMetaText>
              </TodoListMeta>
            </TodoListInfo>
            <TodoListMeta>
              <TodoListButton
                onPress={() => {
                  handleTodoOrder(order.id);
                }}
              >
                <ButtonText>Iniciar</ButtonText>
              </TodoListButton>
            </TodoListMeta>
          </TodoListContainer>
        )}
      />
    </Container>
  );
};

export default TodoList;
