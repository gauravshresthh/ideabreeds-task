import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from './../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomNavbar = props => {
  const {title, onPress} = props;
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="menu" size={25} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.navBarText}>{title}</Text>
    </View>
  );
};

export default CustomNavbar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  navBarText: {
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 22,
    color: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
