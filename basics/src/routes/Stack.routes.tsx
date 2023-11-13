import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/login';
import Home from '../modules/home';
import Shop from '../modules/shop';
import Cart from '../modules/cart';
import Profile from '../modules/profile';
import ProductRegistration from '../modules/product-registration';

const { Navigator, Screen } = createStackNavigator();

function CustomStackNavigatior() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Shop" component={Shop} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Profile" component={Profile} />
      <Screen name="ProductRegistration" component={ProductRegistration} />
    </Navigator>
  );
}

export default CustomStackNavigatior;
