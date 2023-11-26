import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home';
import { PRIMARY } from '../shared/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from '../modules/cart';
import CartComponent from '../shared/components/cart/Cart';
import Profile from '../modules/profile';

const { Navigator, Screen } = createBottomTabNavigator();

function CustomTabNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Icon name="home" size={size} color={color} />;
          }

          if (route.name === 'Cart') {
            return <CartComponent size={size} color={color} style={undefined} />;
          }

          if (route.name === 'Profile') {
            return <Icon name="user" size={size} color={color} />;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

export default CustomTabNavigator;
