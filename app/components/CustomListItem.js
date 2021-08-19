import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './../config/colors';

const CustomListItem = props => {
  const {iconName, text} = props;
  return (
    <View style={styles.customList}>
      <MaterialCommunityIcons
        name={iconName}
        size={25}
        color={colors.primary}
      />
      <Text style={styles.customListText}>{text} </Text>
    </View>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  customList: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  customListText: {
    marginLeft: 30,
  },
});
