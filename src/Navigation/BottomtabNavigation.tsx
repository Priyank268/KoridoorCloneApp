import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyOrder from '../AllPages/Tabs/MyOrder';
import Notifications from '../AllPages/Tabs/Notifications';
import MyProfile from '../AllPages/Tabs/MyProfile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../AllPages/HomePage';

const Tab = createBottomTabNavigator();

const BottomtabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let icons = {
            Home: require('../assets/Icons/HomeIcon.png'),
            'My Order': require('../assets/Icons/MyOrderIcon.png'),
            Notification: require('../assets/Icons/NotificationIcon.png'),
            'My Profile': require('../assets/Icons/MyProfileIcon.png'),
          };
          return (
            <Image
              source={icons[route.name]}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'grey',
              }}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: '#B8FF3D',
          height: 60,
        },
        tabBarActiveTintColor: '#010101', // Optional: Active tab text color
        tabBarInactiveTintColor: '#AAAAAA', // Optional: Inactive tab text color
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="My Order" component={MyOrder} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="My Profile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default BottomtabNavigation;

const styles = StyleSheet.create({});
