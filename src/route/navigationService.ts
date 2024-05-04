import React from 'react';
import { BackHandler } from 'react-native';
import { StackActions, DrawerActions, NavigationContainerRef } from '@react-navigation/native'
import { createNavigationContainerRef } from '@react-navigation/native';

// export const NavigationRef = React.createRef<NavigationContainerRef>();
export const NavigationRef = createNavigationContainerRef();

export function setStackRoot(screens: string | Array<{ name: string }>, stack = 'app-stack', index: number = 0) {
  let routes = [];
  if (typeof (screens) == 'string') {
    routes.push({
      name: screens
    });
  } else {
    routes = screens
  }
  NavigationRef.current?.reset({
    index,
    routes: [{
      name: stack,
      state: {
        routes: routes
      }
    }]
  })
}
export function navigate(name: string, params: any = {}) {
  if (NavigationRef.isReady()) {
    NavigationRef.current?.navigate(name, params)
  }
}

export function replace(name: string) {
  NavigationRef.current?.dispatch(
    StackActions.replace(name)
  );
}

export function closeDrawer() {
  NavigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export function jumpTo(route: string) {
  NavigationRef.current?.dispatch(DrawerActions.jumpTo(route));
}

export function openDrawer() {
  NavigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function toggleDrawer() {
  NavigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function goBack() {
  canGoBack() ?
    NavigationRef.current?.goBack() :
    BackHandler.exitApp();
}

export function canGoBack() {
  return NavigationRef.current?.canGoBack();
}
