import React, { useMemo, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useRoute, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as RouteParams;

  function navigateDash() {
    navigation.navigate('dashboard');
  }

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Ordem Iniciada</Title>

      <OkButton onPress={navigateDash}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
