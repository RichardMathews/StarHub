import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  }, {
    headerLayoutPreset: 'center',
    //Remove o icone de voltar com o nome da pagina anterios (no IOS)
    //headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#24292e',
      },
      headerTintColor: '#FFF',
    },rr
  }),
);

export default Routes;
