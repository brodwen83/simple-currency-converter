import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

type Props = {
  checkmark?: boolean,
  visible?: boolean,
  background?: string,
};

const Icon = ({ checkmark, visible, background }: Props) => {
  const iconStyles = [styles.icon];

  if (visible) {
    iconStyles.push(styles.iconVisible);

    if (background) {
      iconStyles.push({ backgroundColor: background });
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
  }

  return <View style={iconStyles} />;
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  background: PropTypes.string,
};

export default Icon;
