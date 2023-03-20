/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './src/screens/Home';
import {Login} from './src/screens/Login';
import {Profile} from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from './src/theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export const LoginStack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          height: 75,
          alignItems: 'center',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: '#999999',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <HomeIcon name="home" size={28} color={color} />;
          },
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: '#999999',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => {
            return (
              <ProfileIcon name="ios-person-circle" size={28} color={color} />
            );
          },
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
