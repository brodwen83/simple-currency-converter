import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

type Props = {
  checkmark?: boolean,
  visible?: boolean,
};

const Icon = ({ checkmark, visible }: Props) => {
  const iconStyles = [styles.icon];

  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={require('./images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
