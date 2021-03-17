import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  CardTodo,
  TodoInfo,
  TodoTitle,
  BackButton,
  Header,
  HeaderTitle,
  OrderMetaText,
  OrderMeta,
  OrderTimestamp,
  CardTodoContainer,
  TodoButton,
  TodoButtonText,
} from './styles';

interface RouteParams {
  id: Number;
}
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

const Todo: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as RouteParams;
  const [orders, setOrders] = useState<Order>();

  useEffect(() => {
    api.get('orders/' + params.id).then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>{orders?.title}</HeaderTitle>
      </Header>
      <CardTodo>
        <Icon name="map-pin" size={20} color="#000000" />
        <TodoTitle>Ceasa</TodoTitle>
        <Icon
          name="alert-circle"
          size={20}
          color="#f80202"
          style={{ marginLeft: 270 }}
        />
      </CardTodo>
      <CardTodoContainer>
        <OrderMeta>
          <OrderMetaText>{orders?.description}</OrderMetaText>
        </OrderMeta>
      </CardTodoContainer>
      <CardTodoContainer>
        <OrderMeta>
          <Icon name="calendar" size={14} color="#b41828" />
          <OrderTimestamp>Criado em: {orders?.created_at}</OrderTimestamp>
        </OrderMeta>
      </CardTodoContainer>
      <TodoButton onPress={() => {}}>
        <TodoButtonText>Iniciar</TodoButtonText>
      </TodoButton>
      <TodoButton onPress={() => {}}>
        <Icon name="calendar" size={14} color="#fff" />
        <TodoButtonText>Finalizar</TodoButtonText>
      </TodoButton>
    </Container>
  );
};

export default Todo;
