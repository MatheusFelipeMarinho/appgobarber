import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Device } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 76px;
  height: 76px;
  border-radius: 42px;
`;

export const DevicesList = styled(FlatList as new () => FlatList<Device>).attrs(
  {
    contentContainerStyle: {
      paddingTop: 8,
      paddingBottom: 16,
      paddingHorizontal: 8,
    },
  },
)``;

export const DevicesListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #7f7f7f;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const DeviceContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #33cc99;
`;

export const DeviceAvatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 36px;
`;

export const DeviceInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const DeviceName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #7f7f7f;
`;

export const DeviceMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const DeviceMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export const DeviceTimestamp = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;
