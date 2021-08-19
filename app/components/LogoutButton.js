import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './../config/colors';

const LogoutButton = props => {
  const {iconName, text, onPress} = props;
  return (
    <TouchableOpacity style={styles.customList} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={25} color={colors.danger} />
      <Text style={styles.customListText}>{text} </Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  customList: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  customListText: {
    marginLeft: 30,
    color: colors.danger,
  },
});
