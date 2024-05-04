import React, { ReactElement } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface ScreenProps {
  paddingTop?: number,
  wrapScrollView?: boolean,
  keyboardExtraScollHeight?: number,
  children: ReactElement | Array<ReactElement | any> | Array<any>
}

//used in tabs view
export const SCREEN_PADDING = 10;

const Screen = (props: ScreenProps) => (

  <View style={[styles.container, {
    paddingTop: props.paddingTop
  }]}>
    {
      props.wrapScrollView ?
        <KeyboardAwareScrollView
          // enableOnAndroid/
          bounces={false}
          enableAutomaticScroll
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={props.keyboardExtraScollHeight}
        >
          {props.children}
        </KeyboardAwareScrollView>
        :
        props.children
    }
  </View>
)

Screen.defaultProps = {
  wrapScrollView: true,
  paddingTop: SCREEN_PADDING,
  keyboardExtraScollHeight: 0
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});