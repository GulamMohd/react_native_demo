import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import {Button} from 'react-native-paper';
import Constants from 'expo-constants';

export default function ToastAndroidDemo() {
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View style={styles.container}>
      <Button mode='contained' style={{marginTop:10}}  onPress={() => showToast()} >Toggle Toast</Button>
      <Button mode='contained' style={{marginTop:10}}  onPress={() => showToastWithGravity()} >Toggle Toast With Gravity</Button>
      <Button mode='contained' style={{marginTop:10}}
        onPress={() => showToastWithGravityAndOffset()}
      >Toggle Toast With Gravity & Offset</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});