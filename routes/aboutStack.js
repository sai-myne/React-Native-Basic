import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About GameZone',
      // headerStyle: { backgroundColor: '#eee' }
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