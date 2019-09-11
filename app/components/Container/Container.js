import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

type Props = {
  children: any,
  backgroundColor: string,
};

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const Container = ({ children, backgroundColor }: Props) => {
  const containerStyles = [styles.container];

  if (backgroundColor) containerStyles.push({ backgroundColor });

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Container;
