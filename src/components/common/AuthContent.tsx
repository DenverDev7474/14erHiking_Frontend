import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {type NavigationProp } from '@react-navigation/native';

import FlatButton from './FlatButton';
import AuthForm from './AuthForm';

interface Credentials {
  username: string;
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

interface AuthContentProps {
  isLogin: boolean;
  onSubmit: (credentials: Credentials) => void;
  navigation: NavigationProp<any>;
}


const AuthContent = ({ isLogin, onSubmit, navigation }: AuthContentProps) => {

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    firstName: false,
    lastName: false,
    city: false,
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Login');
    }
  }

  const submitHandler = (credentials: Credentials) => {
    let { username, firstName, lastName, city, email, confirmEmail, password, confirmPassword } = credentials;

    username = username.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    city = city.trim();
    email = email.trim();
    password = password.trim();
    confirmEmail = confirmEmail.trim();
    confirmPassword = confirmPassword.trim();

    const usernameIsInvalid = username.length < 3;
    const firstNameIsInvalid = firstName.length < 2;
    const lastNameIsInvalid = lastName.length < 2;
    const cityIsInvalid = city.length < 2;
    const emailIsInvalid = email.length < 6;
    const passwordIsInvalid = password.length < 6;


    const emailIsValid = email.includes('@');
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (isLogin){
        if (usernameIsInvalid || passwordIsInvalid) {
          setCredentialsInvalid({
            username: usernameIsInvalid,
            password: passwordIsInvalid,
            ...
          });
        } 
        else {
            onSubmit({
              username, password,
              firstName: '',
              lastName: '',
              city: '',
              email: '',
              confirmEmail: '',
              confirmPassword: ''
            });
        }
    } else {
        if (usernameIsInvalid || firstNameIsInvalid || lastNameIsInvalid || cityIsInvalid || emailIsInvalid || passwordIsInvalid || !emailIsValid || !emailsAreEqual || !passwordsAreEqual) {
          setCredentialsInvalid({
            username: usernameIsInvalid,
            firstName: firstNameIsInvalid,
            lastName: lastNameIsInvalid,
            city: cityIsInvalid,
            email: emailIsInvalid,
            password: passwordIsInvalid,
            confirmEmail: !emailIsValid || !emailsAreEqual,
            confirmPassword: !passwordsAreEqual || (password === '' && confirmPassword === ''),
          });
        }
        else {
              onSubmit({ username, firstName, lastName, city, confirmEmail, email, password, confirmPassword });
        } 
    }
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Don't have an account? SIGN UP" : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#0068B0',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});


