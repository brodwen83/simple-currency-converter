import React, { Component } from 'react';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../redux/theme/theme.actions';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

type OtherProps = {
  dispatch: Function,
};
type StateProps = {
  primaryColor: string,
};

type Props = StateProps & OtherProps;

class Themes extends Component<Props> {
  handleThemePress = (color: string) => {
    const { dispatch } = this.props;

    dispatch(changePrimaryColor(color));
  };

  render() {
    const { primaryColor } = this.props;
    console.log('primaryColor', primaryColor);
    console.log('$blue', styles.$blue);

    return (
      <ScrollView style={{ marginTop: 30 }}>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={primaryColor === styles.$blue}
          iconBackground={styles.$blue}
          visible
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={primaryColor === styles.$orange}
          iconBackground={styles.$orange}
          visible
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={primaryColor === styles.$green}
          iconBackground={styles.$green}
          visible
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={primaryColor === styles.$purple}
          iconBackground={styles.$purple}
          visible
        />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (state: Object) => {
  const { primaryColor } = state.theme;

  return {
    primaryColor,
  };
};

export default connect(
  mapDispatchToProps,
  null,
)(Themes);
