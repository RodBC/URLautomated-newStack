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
        SetURL:{
            screen: SetURL,
            navigationOptions:{
                title: 'Cadastre sua URL'
            },
        },
        ListUrls:{
            screen: ListUrls,
            navigationOptions:{
                title: 'URL disponível'
            },
        },
    }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle:{
                backgroundColor: 'green',
            },
        },
    })
)
export default Routes;