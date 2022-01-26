import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const RippleDemo = () => (
  <TouchableRipple
    style={{flex:1,justifyContent:'center',alignItems:'center'}}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 255, 255, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default RippleDemo;