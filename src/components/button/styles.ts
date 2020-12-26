import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`

height: 60px;
background: #ff9000;
border-radius: 10px;

align-items: center;
justify-content: center;
`;

export const ButtonText = styled.Text`
font-family: 'RobotoSlab-Medium';
color: #312e38;
font-size: 16px;
`;