import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/login';
import Home from '../modules/home';
import Shop from '../modules/shop';
import Cart from '../modules/cart';

const { Navigator, Screen } = createStackNavigator();

function CustomNavigationStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Shop" component={Shop} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}

export default CustomNavigationStack;
