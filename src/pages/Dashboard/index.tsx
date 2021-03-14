import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/button';

import iconeImg from '../../assets/icone.png';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  DevicesList,
  DeviceContainer,
  DeviceAvatar,
  DeviceInfo,
  DeviceName,
  DeviceMeta,
  DeviceMetaText,
  DevicesListTitle,
  DeviceTimestamp,
} from './styles';

export interface Device {
  id: string;
  oid: String;
  name: string;
  created_at: Date;
  updated_at: Date;
}

const Dashboard: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  console.log(user);

  useEffect(() => {
    api.get('device/list').then((response) => {
      console.log(response);
      setDevices(response.data);
    });
  }, []);

  const navigationToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (DeviceId: string) => {
      navigate('AppointmentDatePicker', { DeviceId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigationToProfile}>
          <UserAvatar source={iconeImg} />
        </ProfileButton>
      </Header>

      <DevicesList
        data={devices}
        keyExtractor={(device) => device.id.toString()}
        ListHeaderComponent={<DevicesListTitle>Totens</DevicesListTitle>}
        renderItem={({ item: device }) => (
          <DeviceContainer
            onPress={() => navigateToCreateAppointment(device.id)}
          >
            <DeviceInfo>
              <DeviceName>{device.name}</DeviceName>
              <DeviceMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <DeviceMetaText>1 occorrencia aberta</DeviceMetaText>
              </DeviceMeta>
              <DeviceMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <DeviceMetaText>1 ocorrencia iniciada</DeviceMetaText>
              </DeviceMeta>
              <DeviceMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <DeviceMetaText>S1 ocorrencia feita</DeviceMetaText>
              </DeviceMeta>
            </DeviceInfo>
          </DeviceContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
