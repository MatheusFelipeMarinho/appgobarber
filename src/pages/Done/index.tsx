import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';
import Timeline from 'react-native-timeline-flatlist';

import {
  Container,
  CardDone,
  DoneInfo,
  DoneTitle,
  BackButton,
  Header,
  HeaderTitle,
  OrderMetaText,
  OrderMeta,
  OrderTimestamp,
  CardDoneContainer,
  DoneButton,
  DoneButtonText,
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
  contract: {
    name: String;
  };
  device: {
    contract_id: Number;
    id: Number;
    name: String;
    oid: String;
  };
  actions: {
    ts: Date;
    type: Number;
    user: String;
  };
  interactions: [
    {
      ts: Date;
      description: String;
      user: Object;
    },
  ];
}

const Done: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as RouteParams;
  const [orders, setOrders] = useState<Order>();
  // const [contract, setContract] = useState<Order>();

  // const [interactions, setInteractions] = useState<Order>();

  useEffect(() => {
    api.get('orders/' + params.id).then((response) => {
      console.log(response.data);
      setOrders(response.data);
    });
  }, []);

  const timeline = [
    {
      time: '10:20',
      title: 'Leonardo',
      description: 'Inspeção visual e teste de sensores via rede ',
    },
    {
      time: '11:20',
      title: 'Leonardo ',
      description: 'Abertura do equipamento e mannutenção de placas',
    },
  ];

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>{orders?.device.name}</HeaderTitle>
      </Header>
      <CardDone>
        <Icon name="map-pin" size={20} color="#000000" />
        <DoneTitle>{orders?.contract.name}</DoneTitle>
      </CardDone>
      <CardDoneContainer>
        <OrderMeta>
          <Icon
            name="alert-circle"
            size={20}
            color="#f80202"
            style={{ marginLeft: 8 }}
          />
          <DoneTitle>{orders?.title}</DoneTitle>
        </OrderMeta>
      </CardDoneContainer>
      <CardDoneContainer>
        <OrderMeta>
          <OrderMetaText>{orders?.description}</OrderMetaText>
        </OrderMeta>
      </CardDoneContainer>
      {/* <CardDoneContainer>
        <OrderMeta>
          <Icon name="calendar" size={14} color="#b41828" />
          <OrderTimestamp>Criado em: {orders?.created_at}</OrderTimestamp>
        </OrderMeta>
      </CardDoneContainer> */}

      <Timeline data={timeline} style={{ padding: 20 }} />

      <DoneButton onPress={() => {}}>
        <DoneButtonText>Devolver</DoneButtonText>
      </DoneButton>
    </Container>
  );
};

export default Done;
