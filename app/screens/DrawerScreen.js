import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {Avatar, Divider} from 'react-native-paper';
import colors from './../config/colors';
import {AuthContext} from '../navigation/context';
import CustomListItem from '../components/CustomListItem';
import LogoutButton from '../components/LogoutButton';

const DrawerScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  const handlePress = () => {
    signOut();
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        <Text style={styles.status}>Available</Text>
      </View>
      <Divider />
      <CustomListItem iconName="comment-edit" text="Set status message" />
      <CustomListItem iconName="face-profile" text="Profile" />
      <View style={styles.notification}>
        <CustomListItem iconName="bell" text="Notifications" />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? colors.primary : colors.white}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <CustomListItem iconName="calendar" text="Events" />
      <CustomListItem iconName="account-settings" text="Settings" />
      <Divider />
      <LogoutButton iconName="logout" text="Logout" onPress={handlePress} />
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
    height: 25,
    width: 25,
    backgroundColor: colors.secondary,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  status: {
    marginLeft: 30,
    fontWeight: '700',
  },
  notification: {
    flexDirection: 'row',
  },
});
