import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component<*> {
  handleThemesPress = () => {
    console.log('themes press');
  };

  handleSitePress = () => {
    console.log('site press');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 30,
        }}
      >
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
          <ListItem
            text="Themes"
            onPress={this.handleThemesPress}
            customIcon={
              <Ionicons
                name="ios-arrow-forward"
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons
                name={`${ICON_PREFIX}-link`}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <Separator />
        </ScrollView>
      </View>
    );
  }
}

export default Options;
