import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

const CustomButton = ({title, onPress, color = 'buttonMain',textColor="white", loading}) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else {
    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors[color]}]}
        onPress={onPress}>
        <Text style={styles.text,{color:colors[textColor]}}>{title}</Text>
      </TouchableOpacity>
    );
  }
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonMain,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"900"
  },
});
