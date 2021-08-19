import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Divider} from 'react-native-paper';
import colors from './../config/colors';
import {AuthContext} from '../navigation/context';

const DrawerScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <View style={styles.imageWrapper}>
          <Avatar.Image
            size={50}
            source={{
              uri: 'https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Gaurav Shrestha</Text>
          <Text style={styles.email}>gauravshresthh@gmail.com</Text>
          <Text style={styles.address}>Gaththaghar,Bhaktapur</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.row}>
        <View style={styles.circle}></View>
        <Text>Available</Text>
      </View>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    backgroundColor: colors.drawerBackground,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  email: {
    fontSize: 13,
    color: colors.gray,
  },
  address: {
    fontSize: 13,
    color: colors.gray,
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    marginRight: 50,
  },
  row: {flexDirection: 'row', alignItems: 'center',marginTop:20},
});
