import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

/**
 * Profile screen
 */
export default class Profile extends React.Component {

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
                <Appbar.Header statusBarHeight={5} style={styles.bottom}>
                    <Appbar.Action
                        icon="arrow-left"
                        onPress={() => this.props.navigation.goBack()}
                    />
                     <Appbar.Content  title='fvgdfgdfgdf'/>
                    <Appbar.Action
                        icon="archive"
                        onPress={() => console.log('Pressed archive')}
                    />
                    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                    <Appbar.Action
                        icon="delete"
                        onPress={() => console.log('Pressed delete')}
                    />
                </Appbar.Header>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
    
    },

});