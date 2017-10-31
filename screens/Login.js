import React, { Component } from 'react';
import { Text, View } from 'react-native';
import InputField from '../components/InputField'
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
      <InputField placeholder= "Enter your email adress here"></InputField>
      <InputField placeholder= "Enter your password here"></InputField>
      </View>

    );
  }
}