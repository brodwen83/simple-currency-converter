import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = (WrappedComponent: any) => {
  class ConnectedAlert extends Component<*> {
    render() {
      const { alertWithType, alert } = this.context;

      return (
        <WrappedComponent
          {...this.props}
          alertWithType={alertWithType}
          alert={alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
