import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

type Props = {
  onPress: Function,
};

const Header = ({ onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/gear.png')}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Header;
