import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component<*> {
  dropdown: any;

  getChildContext() {
    return {
      alert: (...args: any) => this.dropdown.alert(...args),
      alertWithType: (...args: any) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    const { children } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(children)}
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref;
          }}
          defaultContainer={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}
        />
      </View>
    );
  }
}

AlertProvider.childContextTypes = {
  alertWithType: PropTypes.func,
  alert: PropTypes.func,
};

AlertProvider.propTypes = {
  children: PropTypes.element,
};

export default AlertProvider;
