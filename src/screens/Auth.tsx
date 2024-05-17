// Auth Screen

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native';
import { firebase_auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert('Welcome back!');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Log in attempt failed.: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert('Account creaated successfully!');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Something went wrong.: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className='flex-1 justify-center px-4'>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput
          onFocus={() => { }}
          className='p-5 border-solid border-2 border-muted rounded-md'
          value={email}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          onFocus={() => { }}
          className='p-5 mt-2 mb-5 border-solid border-2 border-muted rounded-md'
          secureTextEntry={true}
          value={password}
          placeholder='Password'
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size='large' color='#000000' />
        ) : (
          <>
            <TouchableOpacity
              className='bg-primary p-5 rounded-md'
              accessibilityLabel="Login to your account"
              onPress={signIn}>
              <Text className='text-secondary text-lg font-bold text-center'>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='bg-primary p-5 mt-3 rounded-md'
              accessibilityLabel="Create an account"
              onPress={signUp}>
              <Text className='text-secondary text-lg font-bold text-center'>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Auth;