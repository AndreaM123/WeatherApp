import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import Homepage from './src/pages/Homepage';
import SearchPage from './src/pages/Search';
import MapPage from './src/pages/MapPage';

const Apikey = '72aa2cd3b88178591dc8113c7a2ed809'
const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  state = {
    city: {"name": "Loading..."},
    cities: [] 
  }

  getCityData = async(city) => {
    await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + Apikey, {method: 'GET'})
    .then( (response) => response.json())
    .then((responseJson) => {
      var joined = this.state.cities.concat(responseJson);
      this.setState({
        cities: joined
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  componentDidMount = () => {
    this.getCityData('London');
    this.getCityData('Turin');
    this.getCityData('Milan');
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" children={ () => 
            <Homepage cities = {this.state.cities} />} />
          <Tab.Screen name="Search" component={SearchPage} />
          <Tab.Screen name="Map" component={MapPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarLabel:() => {return null},
  
  tabBarIcon: ({focused}) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = focused? require('./src/assets/icons/Home.png'): require('./src/assets/icons/Home.png');
      break;

      case 'Search':
        iconName = focused? require('./src/assets/icons/Search.png'): require('./src/assets/icons/Search.png');
      break;

      case 'Map':
        iconName = focused? require('./src/assets/icons/Location.png'): require('./src/assets/icons/Location.png');
      break;
    }

    return <Image style={{ width: 20, height: 20, resizeMode: "stretch" }} source={iconName}/>
  }
});