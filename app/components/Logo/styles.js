import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
  },
  image: {
    width: imageWidth / 3,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    color: '$white',
    letterSpacing: -0.5,
    marginTop: 15,
  },
});
