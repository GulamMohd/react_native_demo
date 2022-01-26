import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

/**
 * ActivityIndicatorDemo
 */
export default class ActivityIndicatorDemo extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
        };
    };

    render() {

        const { navigate, state } = this.props.navigation;
       // title:state.params.name
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.indicator} animating={true} color={'#0000ff'} size='large'/>
                <ActivityIndicator style={styles.indicator} animating={true} color={'#ff0000'} size='small'/>
                <ActivityIndicator style={styles.indicator} animating={true} color={'#00ff00'} size={70}/>
                <ActivityIndicator style={styles.indicator} animating={true} color={'#ff00ff'} size={10}/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    indicator:{
        margin:10
    }
});