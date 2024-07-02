import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import Input from './Input';


interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (credentials: any) => void;
  credentialsInvalid: {
    username: boolean;
    firstName: boolean;
    lastName: boolean;
    city: boolean;
    email: boolean;
    confirmEmail: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
}



function AuthForm({ isLogin, onSubmit, credentialsInvalid }: AuthFormProps) {
  const [enteredUsername, setEnteredUsername ] = useState('');
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  useEffect(() => {
    if(isLogin) {
      setEnteredUsername('');
      setEnteredPassword('');
    } else {
      setEnteredUsername('');
      setEnteredFirstName('');
      setEnteredLastName('');
      setEnteredCity('');
      setEnteredEmail('');
      setEnteredConfirmEmail('');
      setEnteredPassword('');
      setEnteredConfirmPassword('');
    }
  }, [isLogin]);


  const {
    username: usernameIsInvalid,
    firstName: firstNameIsInvalid,
    lastName: lastNameIsInvalid,
    city: cityIsInvalid,
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const updateInputValueHandler = ({inputType, enteredValue}: {inputType: string, enteredValue: string}) => {
    switch (inputType) {
      case 'username':
        setEnteredUsername(enteredValue);
        break;
      case 'firstName':
        setEnteredFirstName(enteredValue);
        break;
      case 'lastName':
        setEnteredLastName(enteredValue);
        break;
      case 'city':
        setEnteredCity(enteredValue);
        break;
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  const submitHandler = () => {
    onSubmit({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      city: enteredCity,
      username: enteredUsername,
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Username"          
          onUpdateValue={(value:string) => updateInputValueHandler('username', value)}
          value={enteredUsername}
          keyboardType="default"
          isInvalid={usernameIsInvalid}
        />
        {!isLogin && (
        <Input
          label="First name"
          onUpdateValue={(value:string) => updateInputValueHandler('firstName', value)}
          value={enteredFirstName}
          keyboardType="default"
          isInvalid={firstNameIsInvalid}
        />
        )}
        {!isLogin && (
        <Input
          label="Last name"
          onUpdateValue={updateInputValueHandler.bind(this, 'lastName')}
          value={enteredLastName}
          keyboardType="default"
          isInvalid={lastNameIsInvalid}
        />
        )}
        {!isLogin && (
        <Input
          label="City"
          onUpdateValue={updateInputValueHandler.bind(this, 'city')}
          value={enteredCity}
          keyboardType="default"
          isInvalid={cityIsInvalid}
        />
        )}
        {!isLogin && (
        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        )}
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});