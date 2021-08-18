import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../app/assets/images/Favicon.png'
import colors from './../config/colors';
import CustomButton from '../components/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
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
        <Text>
          Please enter you email address to get a link to change your password.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Go to Login</Text>
        </TouchableOpacity>

        <CustomButton title="Send Email" />
      </View>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
  passwordInput: {
    flex: 1,
  },
  emailLabel: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  passwordLabel: {
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
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
  },
});

export default ForgotPasswordScreen;
