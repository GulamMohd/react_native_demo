import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,IconButton,Colors} from 'react-native-paper';

/**
 * ActivityIndicatorDemo
 */
export default class ButtonDemo extends React.Component {

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
                <Button style={styles.buttonStyle} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    contained Button
                </Button>
                <Button style={styles.buttonStyle} icon="facebook" mode="outlined" onPress={() => console.log('Pressed')}>
                    outlined Button
                </Button>
                <Button style={styles.buttonStyle} icon="google" mode="text" onPress={() => console.log('Pressed')}>
                    text Button
                </Button>

                <IconButton
                    icon="camera"
                    color={Colors.blueA700}
                    size={40}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    buttonStyle: {
        alignSelf: 'auto',
        margin: 20,
    }
});