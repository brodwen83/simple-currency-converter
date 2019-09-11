import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';
import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../redux/currencies/currencies.action';

type OtherProps = {
  navigation: Object,
  dispatch: Function,
};

type StateProps = {
  baseCurrency: string,
  quoteCurrency: string,
  primaryColor: string,
};

type Props = OtherProps & StateProps;

class CurrencyList extends Component<Props> {
  handlePress = (currency: string) => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;

    console.log('currency', currency);

    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }

    navigation.goBack(null);
  };

  render() {
    const {
      navigation,
      baseCurrency,
      quoteCurrency,
      primaryColor,
    } = this.props;
    const { type } = navigation.state.params;

    let selectedCurrency = quoteCurrency;

    if (type === 'base') {
      selectedCurrency = baseCurrency;
    }

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar translucent={false} barStyle="default" />

        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === selectedCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: Object) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const { primaryColor } = state.theme;
  console.log('primaryColor', primaryColor);

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
