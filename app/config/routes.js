import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { StatusBar } from 'react-native';

import { Home, CurrencyList } from '../screens';

const NavStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    // cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

const Navigator = createAppContainer(NavStack);

export default Navigator;
