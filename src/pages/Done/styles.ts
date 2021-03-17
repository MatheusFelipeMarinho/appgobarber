import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const CardDone = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #33cc99;
`;

export const CardDoneContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid #33cc99;
`;

export const DoneInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const DoneTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 8px;
  color: #7f7f7f;
`;

export const BackButton = styled.TouchableOpacity``;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #6200ee;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  line-height: 28px;
  margin-left: 16px;
`;

export const OrderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const OrderMetaText = styled.Text`
  margin-left: 8px;
  color: #000000;
  font-family: 'RobotoSlab-Regular';
`;

export const OrderTimestamp = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;

export const DoneButton = styled(RectButton)`
  flex-direction: row;
  background: #6200ee;
  border-radius: 10px;
  height: 50px;
  margin: 0 24px 24px;
  justify-content: center;
  align-items: center;
`;

export const DoneButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
