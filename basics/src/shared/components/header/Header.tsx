import { useNavigation, useRoute } from '@react-navigation/native';
import { ReactNode } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store';

function onRout(routeName: string[], If: () => ReactNode, Else: () => ReactNode) {
  return (currentRoute: string) => {
    if (routeName.includes(currentRoute)) {
      return If();
    } else {
      return Else();
    }
  };
}

function productRegistration(isAdmin: boolean, navigate: () => void) {
  if (!isAdmin) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.rightIcon} onPress={navigate}>
      <Icon name="plus" size={24} color="#333" />
    </TouchableOpacity>
  );
}

function Header() {
  const route = useRoute();
  const doNavigation = useNavigation();

  const { admin } = useSelector((root: RootReducer) => root.userReducer);

  const leftIcon = onRout(
    ['Home'],
    () => {
      return (
        <TouchableOpacity style={styles.leftIcon}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
      );
    },
    () => {
      return (
        <TouchableOpacity style={styles.leftIcon} onPress={() => doNavigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
      );
    },
  );

  const rightIcon = onRout(
    ['Login', 'CreateAccount', 'Profile', 'ProductRegistration'],
    () => {
      return null;
    },
    () => {
      return (
        <>
          {productRegistration(admin, () => doNavigation.navigate('ProductRegistration'))}

          <Cart
            style={styles.rightIcon}
            size={24}
            color="#333"
            onPress={() => doNavigation.navigate('Cart')}
          />

          <TouchableOpacity
            style={styles.rightIcon}
            onPress={() => doNavigation.navigate('Profile')}
          >
            <Icon name="user" size={24} color="#333" />
          </TouchableOpacity>
        </>
      );
    },
  );

  return (
    <View style={styles.header}>
      {leftIcon(route.name)}
      {rightIcon(route.name)}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  leftIcon: {
    flex: 1,
    marginHorizontal: 10,
  },
  rightIcon: {
    marginHorizontal: 10,
  },
});

export default Header;
