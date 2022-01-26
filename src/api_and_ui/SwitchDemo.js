import React,{useState} from 'react';
import {View,StyleSheet,Switch as Switch_native } from 'react-native';
import { Switch as Switchpaper } from 'react-native-paper';

const SwitchDemo = () => {

  //for native
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//for native-paper
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return( <View style={{flex:1,alignContent:'center',alignItems:'center',alignSelf:'center'}}>
     <Switch_native
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
     <Switchpaper style={{alignContent:'center',alignSelf:'center',marginTop:10}}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isSwitchOn ? "#f5dd4b" : "#f4f3f4"}
     value={isSwitchOn} onValueChange={onToggleSwitch} />
    
</View>);
};

export default SwitchDemo;