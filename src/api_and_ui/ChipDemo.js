import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Chip} from 'react-native-paper';

/**
 * Profile screen
 */
export default class ChipDemo extends React.Component {

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

               <Chip icon='cup'  onPress={() => console.log('Pressed')}  isTVSelectable={true}>Example Chip</Chip>
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