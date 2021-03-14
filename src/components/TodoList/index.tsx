import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import api from '../../services/api';

import {
  Container,
  TodoListFlat,
  TodoListInfo,
  TodoListContainer,
  TodoListName,
} from './styles';

export interface Actions {
  ts: Date;
  type: Number;
  user: Number;
}

export interface Device {
  contract_id: Number;
  id: Number;
  name: String;
  oid: String;
}

export interface Contract {
  name: String;
}

export interface Orders {
  id: string;
  contract_id: String;
  description: string;
  closed_automatically: Number;
  code: string;
  device_id: Number;
  priority: Number;
  status: Number;
  title: String;
  created_at: Date;
  updated_at: Date;
  actions: {
    [key: string]: Actions;
  };
  contract: {
    [key: string]: Contract;
  };
  device: {
    [key: string]: Device;
  };
}

const TodoList: React.FC = () => {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    api.get('orders/list/todo').then((response) => {
      setOrders(response.data);
    });
  }, []);

  console.log(orders);
  return (
    <Container>
      <TodoListFlat
        data={orders}
        keyExtractor={(order) => order.id.toString()}
        ListHeaderComponent={<TodoListName>Totens</TodoListName>}
        renderItem={({ item: order }) => (
          <TodoListContainer onPress={() => {}}>
            <TodoListInfo>
              <TodoListName>{order}</TodoListName>
            </TodoListInfo>
          </TodoListContainer>
        )}
      />
    </Container>
  );
};

export default TodoList;
