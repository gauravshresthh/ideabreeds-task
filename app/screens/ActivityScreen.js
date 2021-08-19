import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Activity Screen</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
