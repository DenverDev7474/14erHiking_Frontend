import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { type NavigationProp } from '@react-navigation/native';
import { useLoginUserMutation } from '../../state/services/user.service';
import AuthContent from '../../components/common/AuthContent';
import LoadingOverlay from '../../components/common/LoadingOverlay';

interface LoginDataprops {
  username: string;
  password: string;
}


const LoginScreen = ({navigation}: { navigation: NavigationProp<any> }) => {
  const [loginUser, { error, isLoading, isSuccess }] = useLoginUserMutation();



  const handleLogin = ({ username, password }:LoginDataprops) => {
    loginUser({ username, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Main');

    } else if (error) {
      console.log('error', error);
      Alert.alert('Login Error', error.toString());
    }
    // Remove 'data' from dependency list if it's not used
  }, [isSuccess, error, navigation]);

  if (isLoading) {
    return <LoadingOverlay message="Loading" />;
  }

  return <AuthContent isLogin onSubmit={handleLogin} navigation={navigation}/>;
};

export default LoginScreen;
