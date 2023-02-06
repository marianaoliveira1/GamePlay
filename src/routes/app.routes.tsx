import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../global/styles/theme';
import { Home } from '../sreens/Home';
import { SignIn } from '../sreens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
      <Navigator
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: 'transparent',
            }
        }}
      >   
        <Screen 
          name="SigIn"
          component={SignIn}
        /> 
        <Screen 
          name="Home"
          component={Home}
        />
      </Navigator>
    )
  }
  