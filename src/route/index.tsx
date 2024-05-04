/* eslint-disable prettier/prettier */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import * as Screens from '../screens';
import { Dimensions } from 'react-native';
import { NavigationRef, navigate } from './navigationService';
import HeaderLeftButton from './HeaderLeftButton';
import Logout from './Logout';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={'login'} screenOptions={{
      headerShown: false
    }}>
      <AuthStack.Screen name={'login'} component={Screens.Login} />
      {/*  <AuthStack.Screen
        name={'server-error'}
        component={Screens.ServerError}
      /> */}
    </AuthStack.Navigator>
  );
};

const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName={'home'}
      screenOptions={() => ({
        headerMode: 'screen',
        headerStyle: {
          elevation: 0,
          backgroundColor: '#52673A',
        },
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          fontFamily: 'bold',
        },
        headerRightContainerStyle: {
          width: 80,
          alignItems: 'center',
        },
        headerLeft: ({ canGoBack }) => (
          <HeaderLeftButton canGoBack={canGoBack} />
        ),
        headerRight: () => (
          <Logout />
        ),
        headerTitleAlign: 'center',
        headerTitleContainerStyle: {
          maxWidth: '60%',
        },
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <AppStack.Screen
        name={'home'}
        options={{ title: 'Dashboard' }}
        component={Screens.Dashboard}
      />
      <AppStack.Screen
        name={'event-details'}
        options={{ title: 'Event Info' }}
        component={Screens.EventDetails}
      />
    </AppStack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('userName').then((name: string | null) => {
      setUserName(name);
      if (name) {
        navigate('app-stack')
      }
    }).catch(() => { });
  }, []);

  return (
    <NavigationContainer ref={NavigationRef}>
      <Drawer.Navigator
        initialRouteName={`${userName ? 'app' : 'auth'}-stack`}
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          drawerType: 'front',
          drawerStyle: {
            width: SCREEN_WIDTH * 0.75,
            backgroundColor: 'red'
          }
        }}
      >
        <Drawer.Screen
          name={'auth-stacks'}
          component={AuthStackNavigator}
        />
        <Drawer.Screen
          name={'app-stack'}
          component={AppStackNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
