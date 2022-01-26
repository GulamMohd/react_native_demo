import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import * as Device from 'expo-device';
//npm install expo-device



export default function DeviceDemo(){
    
    return(
            <View style={{flex:1,alignContent:'center'}}>
                <Text>{Device.isDevice}</Text>
                <Text>{Device.brand}</Text>
                <Text>{Device.designName}</Text>
                <Text>{Device.deviceName}</Text>
                <Text>{Device.osName}</Text>
            </View>
    );
}