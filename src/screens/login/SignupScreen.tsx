import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useRegisterUserMutation } from "../../state/services/user.service";
import { type NavigationProp } from '@react-navigation/native';
import AuthContent from '../../components/common/AuthContent';
import LoadingOverlay from '../../components/common/LoadingOverlay';

const SignupScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [registerUser, { isLoading, isSuccess, error }] = useRegisterUserMutation();

  const signUpHandler = async (userData) => {
    try {
      await registerUser(userData).unwrap();

      if (isSuccess) {
        console.log('Signup success');
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log('Signup error', err);
      let message = 'An error occurred during sign up.';
      Alert.alert('Signup Error', message, [{text: 'OK'}]);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Signup success');
      navigation.navigate('Login');
    }
  }, [isSuccess, navigation]);

  // It's better to use a ternary operator here for clarity
  return isLoading ? <LoadingOverlay message="" /> : (
    <AuthContent
      isLogin={false}
      onSubmit={signUpHandler}
      navigation={navigation}
    />
  );
};

export default SignupScreen;
