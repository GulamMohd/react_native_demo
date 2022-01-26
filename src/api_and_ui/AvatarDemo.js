import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {Avatar} from 'react-native-paper';

/**
 * Profile screen
 */
export default class AvatarDemo extends React.Component {

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
                <Avatar.Icon style={styles.avatarStyle} onTouchEnd={()=>alert("hi")} size={100} icon="facebook" />
                <Avatar.Image style={styles.avatarStyle} size={100} source={require('../../assets/img.jpg')} />
                <Avatar.Text style={styles.avatarStyle} size={100} label="XD" />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarStyle:{
        margin:10,
    }
});