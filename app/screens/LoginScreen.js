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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [validationError, setValidationError] = useState('');

  const VALID_EMAIL = 'gauravshresthh@gmail.com';
  const VALID_PASSWORD = 'gaurav12345';

  const loginHandler = () => {
    if (!email || !password) {
      setValidationError('Email and password are required !');
      return;
    }
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      navigation.navigate('Home');
      return;
    } else {
      setValidationError('Invalid Email or Password');
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
        <Text style={styles.logoText}>Sign in</Text>
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

        <Text style={styles.passwordLabel}>Password</Text>

        <View style={styles.Wrapper}>
          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            style={styles.passwordInput}
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={showPassword}
            value={password}
          />
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={25}
            color={colors.primary}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        </View>
        <View style={styles.linkWrapper}>
          <View style={styles.rememberWrapper}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={{color: colors.primary}}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={{marginVertical: 20, color: colors.yellow}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Login" onPress={loginHandler} />
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

export default LoginScreen;
