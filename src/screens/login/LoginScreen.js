import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLoginUserMutation } from '../../state/services/user.service';
import AuthContent from '../../components/common/AuthContent';
import LoadingOverlay from '../../components/common/LoadingOverlay';

const LoginScreen = () => {
  const [loginUser, { error, isLoading, isSuccess }] = useLoginUserMutation();
  const navigation = useNavigation();

  const handleLogin = ({ username, password }) => {
    loginUser({ username, password });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('isSuccess', isSuccess);
      navigation.replace('Main');
    } else if (error) {
      console.log('error', error);
      Alert.alert('Login Error', error.message, [{ text: 'OK' }]);
    }
    // Remove 'data' from dependency list if it's not used
  }, [isSuccess, error, navigation]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin onSubmit={handleLogin} />;
};

export default LoginScreen;
