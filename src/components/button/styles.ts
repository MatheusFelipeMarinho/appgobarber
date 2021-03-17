import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #6200ee;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 16px;
`;
