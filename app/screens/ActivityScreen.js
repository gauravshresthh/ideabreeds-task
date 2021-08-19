import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavbar from '../components/CustomNavbar';

import colors from './../config/colors';

const ActivityScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.toggleDrawer();
  };
  return (
    <LinearGradient
      colors={['#eafffd', '#4cc1d4', '#129aa2']}
      style={styles.linearGradient}>
      <CustomNavbar onPress={handlePress} title="Activity" />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>OPTONOME</Text>
        <Text style={styles.logoSubText}>
          Communication made easy everywhere
        </Text>

        <Text style={styles.logoText}>Activity Screen</Text>
        <Image
          source={require('../assets/images/2.png')}
          style={styles.banner}
        />
      </View>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  banner: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 60,
  },
});

export default ActivityScreen;
