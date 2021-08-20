import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import colors from './../config/colors';
import CustomButton from '../components/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const [validationError, setValidationError] = useState('');

  const sendEmailHandler = () => {
    if (!email) {
      setValidationError('Email is required !');
      return;
    }
  };
  return (
    <LinearGradient
      colors={['#eafffd', '#4cc1d4', '#129aa2']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Forgot Password ?</Text>
        <Text style={styles.emailLabel}>Email</Text>
        <View style={styles.Wrapper}>
          <TextInput
            onChangeText={text => {
              setEmail(text);
            }}
            style={styles.textInput}
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <Text style={styles.emailHint}>
          Please enter you email address to get a link to change your password.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Go to Login</Text>
        </TouchableOpacity>

        <CustomButton title="Send Email" onPress={sendEmailHandler} />
        {validationError ? (
          <TouchableOpacity style={styles.errorContainer}>
            <Text style={styles.errorText}> {validationError}</Text>
            <MaterialCommunityIcons
              name="close"
              size={25}
              color={colors.white}
              onPress={() => {
                setValidationError('');
              }}
            />
          </TouchableOpacity>
        ) : null}
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
  link: {
    marginVertical: 20,
    color: colors.link,
    textDecorationLine: 'underline',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 30,
  },
  textInput: {
    flex: 1,
  },
  emailHint: {
    textAlign: 'auto',
  },

  emailLabel: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },

  Wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.placeholder,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  errorContainer: {
    backgroundColor: colors.danger,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: colors.white,
  },
});

export default ForgotPasswordScreen;
