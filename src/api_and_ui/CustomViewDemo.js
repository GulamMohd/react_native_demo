import React from 'react';
import {View,Text} from 'react-native';
import {Button} from 'react-native-paper';

const CustomViewDemo=()=>{
    return( <View >
        <Cat name={'World'}/>
        <FancyButton title="Button"/>
    </View>);
}

const Cat = (props) => {
      return( <View>
        <Text>Hello, I am {props.name}!</Text>
      </View>);
  }

  const FancyButton = (props) => {
    return( 
    <Button mode="contained" style={{backgroundColor:'red',}}>{props.title}</Button>
    );
}

  export default CustomViewDemo;