import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import { Image } from 'react-native';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
        headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height:80 }} />
      }
    }
  }
};

// home stack navigator screens
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default AboutStack;