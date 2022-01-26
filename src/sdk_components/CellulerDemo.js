//expo install expo-cellular
import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import * as Cellular from 'expo-cellular';



export default function CellulerDemo(){
    useEffect(() => {
        (async () => {
            await Cellular.getCellularGenerationAsync();
        })();
    }, []);
    
    return(
            <View style={{flex:1,alignContent:'center'}}>
                <Text>{Cellular.allowsVoip}</Text>
                <Text>{Cellular.carrier}</Text>
                <Text>{Cellular.isoCountryCode}</Text>
                <Text>{Cellular.mobileCountryCode}</Text>
                <Text>{Cellular.mobileNetworkCode}</Text>
            </View>
    );
}