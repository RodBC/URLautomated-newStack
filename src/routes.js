import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {SetURL} from './SetURL';
import {ListUrls} from './List'

const Routes = createAppContainer(
    createStackNavigator({
        SetURL:{
            screen: SetURL,
            navigationOptions:{
                title: 'Landing do digao'
            },
        },
        ListUrls:{
            screen: ListUrls,
            navigationOptions:{
                title: 'testin'
            },
        },
    }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle:{
                backgroundColor: '#7D40E7',
            },
        },
    })
)
export default Routes;