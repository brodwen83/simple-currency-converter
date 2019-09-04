import React, { Component } from 'react';
import { View,
  Text,
  ImageBackground,
  Keyboard,
  Animated,
  Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

type Props = {};

class Logo extends Component<Props> {
  containerImageWidth: any;

  imageWidth: any;

  keyboardShowListener: any;

  keyboardHideListener: any;

  constructor(props: Object) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide,
    );
  }

  componentWillUnmount() {
    this.keyboardHideListener.remove();
    this.keyboardShowListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];

    const imageStyle = [
      styles.logo,
      {
        width: this.imageWidth,
      },
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            resizeMode="contain"
            source={require('./images/background.png')}
            style={styles.backgroundImage}
          >
            <Animated.Image
              resizeMode="contain"
              style={imageStyle}
              source={require('./images/logo.png')}
            />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
