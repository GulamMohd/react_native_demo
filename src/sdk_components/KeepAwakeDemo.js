import { useKeepAwake,activateKeepAwake,deactivateKeepAwake} from 'expo-keep-awake';
import React from 'react';
import { Text, View } from 'react-native';

export default function KeepAwakeDemo() {
  useKeepAwake();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This screen will never sleep!</Text>
    </View>
  );
}

 class KeepAwakeExample extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={this._activate} title="Activate" />
          <Button onPress={this._deactivate} title="Deactivate" />
        </View>
      );
    }
  
    _activate = () => {
      activateKeepAwake(); 
      alert('Activated!');
    };
  
    _deactivate = () => {
      deactivateKeepAwake(); 
      alert('Deactivated!');
    };
  }