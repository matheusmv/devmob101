import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/login';
import Home from '../modules/home';

const { Navigator, Screen } = createStackNavigator();

function CustomNavigationStack() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export default CustomNavigationStack;
