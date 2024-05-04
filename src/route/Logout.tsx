import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { navigate } from './navigationService';

const Logout = () => {
  const onPress = async () => {
    await AsyncStorage.clear();
    navigate('auth-stacks')
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={'logout-variant'} style={styles.icon} />
      </View>
    </TouchableOpacity>
  )
}

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'right',
  },
});
