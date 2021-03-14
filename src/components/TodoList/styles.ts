import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Orders } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const TodoListFlat = styled(
  FlatList as new () => FlatList<Orders>,
).attrs({
  contentContainerStyle: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
})``;

export const TodoListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #7f7f7f;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const TodoListContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #33cc99;
`;

export const TodoListAvatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 36px;
`;

export const TodoListInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const TodoListName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #7f7f7f;
`;

export const TodoListMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const TodoListMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export const TodoListTimestamp = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;
