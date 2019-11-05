import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import React from 'react'
import First from './first'
import Third from './third'
import Forth from './forth'
import Second from './second'

const Top = createMaterialTopTabNavigator({
  Third: { screen: Third },
  Forth: { screen: Forth }
},{lazy:true})
export const Topat = createAppContainer(Top)



const MainNavigator = createStackNavigator({
  First: { screen: First },
  Second: {
    screen: ({ navigation }) =>
      <View style={{ flex: 1 }}>
        <Text>dsaf</Text>
        <Second screenProps={{ rootNavigation: navigation, type: navigation.getParam('type') }} />
      </View>
    ,
    navigationOptions: ({ navigation }) => {
      return {
        header: (
          <View>
            <Text>{navigation.getParam('type')} + ;dsfjg;lajfglkj</Text>
          </View>
        )
      }
    }
  },
})


const App = createAppContainer(MainNavigator);


export default App;