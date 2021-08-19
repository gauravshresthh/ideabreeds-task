import React, {useState, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/SplashScreen';
import {AuthContext} from './navigation/context';

const MainApp = () => {
  const [userInfo, setUserInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setLoading(false);
        setUserInfo('loggedIn');
      },

      signOut: () => {
        setLoading(false);
        setUserInfo('');
      },
    };
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userInfo ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default MainApp;
