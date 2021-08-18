import React from 'react'
import { ScrollView,View, Text ,StyleSheet,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../app/assets/images/Favicon.png'
import colors from './../config/colors';
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {
    return (
        <LinearGradient colors={['#eafffd', '#4cc1d4', '#129aa2']} style={styles.linearGradient}>
            <View style={styles.container}>
                 <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                 <Text style={styles.logoText}>Sign in</Text>
                
                
       
                <CustomButton title="Login" />
            </View>
       </LinearGradient>
    )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      padding:30,
      marginBottom:30
  },
  
  logo: {
    height: 100,
    width: 100,
  },
  logoText:{
      fontSize:20,
      fontWeight:"700",
      color:colors.primary
  },
  
});


export default LoginScreen