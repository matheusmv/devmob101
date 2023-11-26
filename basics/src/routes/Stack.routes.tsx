import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/login';
import Shop from '../modules/shop';
import Cart from '../modules/cart';
import Profile from '../modules/profile';
import ProductRegistration from '../modules/product-registration';
import CreateAccount from '../modules/create-account';
import Main from '../modules/main';
import CustomTabNavigator from './Tab.routes';

const { Navigator, Screen } = createStackNavigator();

function CustomStackNavigatior() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="HomeScreen" component={CustomTabNavigator} />
      <Screen name="Shop" component={Shop} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Profile" component={Profile} />
      <Screen name="ProductRegistration" component={ProductRegistration} />
    </Navigator>
  );
}

export default CustomStackNavigatior;
