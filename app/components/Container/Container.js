import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
