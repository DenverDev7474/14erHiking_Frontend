import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useRegisterUserMutation } from "../../state/services/user.service";
import AuthContent from '../../components/common/AuthContent';
import LoadingOverlay from '../../components/common/LoadingOverlay';

const SignupScreen = ({ navigation }) => {
  const [registerUser, { isLoading, isSuccess, error }] = useRegisterUserMutation();

  const signUpHandler = async (userData) => {
    try {
      await registerUser(userData).unwrap();

      if (isSuccess) {
        console.log('Signup success');
        navigation.replace('Login');
      }
    } catch (err) {
      console.log('Signup error', err);
      let message = 'An error occurred during sign up.';
      if (err.data?.error?.includes('E11000') || err.data?.error?.includes('A user with the given username is already registered')) {
        message = 'Username or email already exists.';
      }
      Alert.alert('Signup Error', message, [{text: 'OK'}]);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Signup success');
      navigation.replace('Login');
    }
  }, [isSuccess, navigation]);

  // It's better to use a ternary operator here for clarity
  return isLoading ? <LoadingOverlay /> : (
    <AuthContent
      isLogin={false}
      onSubmit={signUpHandler}
    />
  );
};

export default SignupScreen;
