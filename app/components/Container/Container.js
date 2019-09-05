import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

type Props = {
  children: any,
};

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const Container = ({ children }: Props) => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

export default Container;
