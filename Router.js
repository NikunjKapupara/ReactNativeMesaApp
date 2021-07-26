import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import LandingScreen from './Screens/LandingScreen';
import RegisterInstituteScreen from  './Screens/RegisterInstituteScreen'
import RegisterPatientScreen from './Screens/RegisterPatientScreen'

const Stack = createStackNavigator();

class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="RegisterScreen" component={RegisterInstituteScreen} />
        <Stack.Screen name="Loginscreen" component={LoginScreen} />
        <Stack.Screen name="Landingscreen" component={LandingScreen} />
        <Stack.Screen name="RegisterPatientScreen" component={RegisterPatientScreen} />
      </Stack.Navigator>
    );
  }
}

export default Router;