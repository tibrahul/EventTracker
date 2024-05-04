import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { goBack, toggleDrawer } from './navigationService';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderLeftButtonProps {
  canGoBack: boolean | undefined;
}

const HeaderLeftButton = (props: HeaderLeftButtonProps) => {
  const onPress = () => {
    props.canGoBack ? goBack() : toggleDrawer();
  };

  if (!props.canGoBack) {
    return <></>;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={props.canGoBack ? 'chevron-left' : 'menu'}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};
export default HeaderLeftButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 40,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
});
