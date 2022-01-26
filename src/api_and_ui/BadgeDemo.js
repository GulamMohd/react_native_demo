import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {Avatar, Badge} from 'react-native-paper';

/**
 * Profile screen
 */
export default class BadgeDemo extends React.Component {

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
              <Badge >3</Badge>
              <Avatar.Image style={styles.avatarStyle} size={100} source={require('../../assets/img.jpg')} />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});