import * as React from 'react';
import { View ,StyleSheet} from 'react-native';
import { Divider, Text } from 'react-native-paper';

const DividerDemo = () => (
  <View>
    <Text>Lemon</Text>
    <Divider style={{borderColor:'#ff0000'}}/>
    <Text>Mango</Text>
    <Divider />
    <Text>Orange</Text>

    {/* custom divider */}
    <Separator />
  </View>
);

//custom divider code
const Separator = () => (
    <View style={{marginVertical: 8,
        borderBottomColor: '#FF0000',
        height:10,
        backgroundColor:'#FF0000',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />
  );

export default DividerDemo;