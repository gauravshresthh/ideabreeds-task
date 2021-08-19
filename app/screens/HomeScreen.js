import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavbar from '../components/CustomNavbar';

import colors from './../config/colors';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.toggleDrawer();
  };
  return (
    <LinearGradient
      colors={['#eafffd', '#4cc1d4', '#129aa2']}
      style={styles.linearGradient}>
      {/* <CustomNavbar onPress={handlePress} title="Home" /> */}
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 26.537166427314844,
            longitude: 88.08079099916846,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
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
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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

export default HomeScreen;
