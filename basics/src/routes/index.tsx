import { NavigationContainer } from '@react-navigation/native';

import CustomNavigationStack from './Stack.routes';

function Routes() {
  return (
    <NavigationContainer>
      <CustomNavigationStack />
    </NavigationContainer>
  );
}

export default Routes;
