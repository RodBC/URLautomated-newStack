import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {SetURL} from './SetURL';
import {ListUrls} from './List'

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       navigation.navigate('ListUrls');
  //     }
  //   })
  // }, []);

const Routes = createAppContainer(
    createStackNavigator({
        ListUrls: {
            screen: ListUrls,
            navigationOptions: {
              title: 'Login'
            },
          },
          SetURL: {
            screen: SetURL,
            navigationOptions: {
              title: 'Perfil no Github'
            }
          },
        }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle:{
                backgroundColor: '#009999',
            },
        },
    })
)
export default Routes;