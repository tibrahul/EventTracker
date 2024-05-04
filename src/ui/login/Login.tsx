import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Screen from '../../components/Screen'
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../route/navigationService';

const Login = () => {

  const [name, setName] = useState<string | undefined>();

  const handleSubmitName = async () => {
    if (name) {
      await AsyncStorage.setItem('userName', name);
      navigate('app-stack');
    } else {
      Alert.alert("Please enter name to proceed.");
    }
  }

  return (
    <Screen
      paddingTop={0}
      wrapScrollView={false}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        bounces={false}
        enableAutomaticScroll
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.welcometTitleContainer}>
            <Text style={styles.welcomeText}>{'Welcome!'}</Text>
          </View>
          <View style={styles.mainContainer}>
            <View>
              <Text> {`Name`} </Text>
              <TextInput
                value={name}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#52673A'}
                onChangeText={(text: string) => setName(text)}
                style={styles.input}
              />
            </View>
            <Button title='Submit' onPress={handleSubmitName} color={'#52673A'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

export default Login;
