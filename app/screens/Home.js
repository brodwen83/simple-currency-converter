import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import Container from '../components/Container/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import {
  swapCurrency,
  changeCurrencyAmount,
} from '../redux/currencies/currencies.action';

type OtherProps = {
  navigation: Object,
};

type StateProps = {
  amount: number,
  baseCurrency: string,
  quoteCurrency: string,
  conversionRate: number,
  lastConvertedDate: string,
  isFetching: boolean,
};

type Dispatchers = {
  swap: Function,
  changeAmount: Function,
};

type Props = StateProps & OtherProps & Dispatchers;

class Home extends Component<Props> {
  handlePressBaseCurrency = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', {
      title: 'Base Quote  Currency',
      type: 'quote',
    });
  };

  handleTextChange = (amount: string) => {
    const { changeAmount } = this.props;

    changeAmount(parseFloat(amount));
  };

  handleSwapCurrency = () => {
    const { swap } = this.props;

    swap();
  };

  handleOptionsPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Options');
  };

  render() {
    const {
      amount,
      baseCurrency,
      quoteCurrency,
      conversionRate,
      lastConvertedDate,
      isFetching,
    } = this.props;

    let quotePrice = (conversionRate * amount).toFixed(2);
    if (isFetching) {
      quotePrice = '...';
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo />

          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />

          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
          />

          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state: Object) => {
  const { amount, baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const lastConvertedDate = conversionSelector.date
    ? new Date(conversionSelector.date)
    : new Date();
  const { isFetching } = conversionSelector;

  return {
    amount,
    baseCurrency,
    quoteCurrency,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate,
    isFetching,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  swap: () => dispatch(swapCurrency()),
  changeAmount: (amount: number) => dispatch(changeCurrencyAmount(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
