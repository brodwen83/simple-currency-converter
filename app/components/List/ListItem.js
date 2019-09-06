import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from './Icon';

import styles from './styles';

type Props = {
  onPress: Function,
  text: string,
  selected?: boolean,
  checkmark?: boolean,
  visible?: boolean,
  customIcon?: any,
  iconBackground?: string,
};

const ListItem = ({
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}: Props) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          style={styles.checkIcon}
          checkmark={checkmark}
          visible={visible}
          background={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

ListItem.defaultProps = {
  selected: false,
  checkmark: true,
  visible: true,
  customIcon: null,
  iconBackground: '',
};

export default ListItem;
