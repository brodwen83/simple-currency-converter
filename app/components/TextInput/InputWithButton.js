import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import color from 'color';
import PropTypes from 'prop-types';

import styles from './styles';

type Props = {
  buttonText: string,
  onPress: Function,
  editable?: boolean,
  buttonTextColor?: string,
};

const InputWithButton = (props: Props) => {
  const {
    buttonText, onPress, editable = true, buttonTextColor,
  } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const buttonTextStyles = [styles.buttonText];
  if (buttonTextColor) buttonTextStyles.push({ color: buttonTextColor });

  if (editable === false) {
    containerStyles.push(styles.conatainerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        editable={editable}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
  buttonTextColor: PropTypes.string,
};

export default InputWithButton;
