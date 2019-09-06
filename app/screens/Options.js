/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component<*> {
  handlePressThemes = () => {
    const { navigation } = this.props;

    navigation.navigate('Themes');
  };

  handlePressSite = async () => {
    const { alertWithType } = this.props;

    try {
      await Linking.openURL('htssstp://fixer.io');
    } catch (error) {
      alertWithType(
        'error',
        'Sorry',
        "Fixer.io can't be opened as of the moment.",
      );
    }
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  alertWithType: PropTypes.func,
};

export default connectAlert(Options);
