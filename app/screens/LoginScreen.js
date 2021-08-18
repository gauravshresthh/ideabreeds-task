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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
            secureTextEntry
            value={password}
          />
          <MaterialCommunityIcons name="eye" size={25} color={colors.primary} />
        </View>
        <View style={styles.linkWrapper}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={{marginVertical: 20}}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Login" />
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
});

export default LoginScreen;
