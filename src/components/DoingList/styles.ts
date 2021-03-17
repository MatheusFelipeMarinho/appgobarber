import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Order } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const DoingListFlat = styled(
  FlatList as new () => FlatList<Order>,
).attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
})``;

export const DoingListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #7f7f7f;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const DoingListContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #33cc99;
`;

export const DoingListAvatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 36px;
`;

export const DoingListInfo = styled.View`
  flex: 1;
  margin-left: 20px;
  padding-left: 8px;
`;

export const DoingListName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #7f7f7f;
`;

export const DoingListMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const DoingListMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export const DoingListTimestamp = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;

export const DoingListButton = styled(RectButton)`
  padding: 12px 24px 12px 24px;
  background: #6200ee;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 16px;
`;
