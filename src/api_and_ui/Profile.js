import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

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

                <Text>Hello world</Text>

                <Button
                    title="Go to home screen"
                    onPress={() => goback()}
                />

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});