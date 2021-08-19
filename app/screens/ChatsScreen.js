import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chats Screen</Text>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
