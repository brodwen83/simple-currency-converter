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
};

const ListItem = ({
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true,
}: Props) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          style={styles.checkIcon}
          checkmark={checkmark}
          visible={visible}
        />
      ) : (
        <Icon />
      )}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default ListItem;
