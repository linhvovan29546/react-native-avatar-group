import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { HorizontalGroupAvatar, showType } from 'react-native-avatar-group';


export default function App() {
  const FACES = [
    {
      id: 0,
      imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
      fullName: 'Kobe Pham'
    },
    {
      id: 1,
      imageUrl: 'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-2.jpg',
      fullName: 'Kobe',
    },
    {
      id: 2,
      imageUrl: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
      fullName: 'Jayne cran'
    },
    {
      id: 3,
      imageUrl: '',//'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-1.jpg',
      fullName: 'Jenifer Nguyen'
    },

  ];
  return (
    <View style={styles.container}>
      <HorizontalGroupAvatar
        faces={FACES}
        type={showType.horizontal}
        containerStyle={{
          marginBottom: 20
        }}
      />

      <HorizontalGroupAvatar
        faces={FACES}
        type={showType.circle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
