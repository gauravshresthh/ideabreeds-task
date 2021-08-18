import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../app/assets/images/Favicon.png'
import colors from './../config/colors';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#eafffd', '#4cc1d4', '#129aa2']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>OPTONOME</Text>
        <Text style={styles.logoSubText}>
          Communication made easy everywhere
        </Text>

        <Text style={styles.logoText}>Home Screen</Text>
        <Image
          source={require('../assets/images/2.png')}
          style={styles.banner}
        />
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          title="Sign in"
          color="white"
          textColor="primary"
          onPress={() => navigation.navigate('Login')}
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

export default HomeScreen;
