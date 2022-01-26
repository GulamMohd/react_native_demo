import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Banner } from 'react-native-paper';

/**
 * Profile screen
 */
export default class BannerDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),

        };
    };



    render() {
        const { navigate, state } = this.props.navigation;
        return (
           
                <Banner
                    visible={this.state.visible}
                    actions={[
                        {
                            label: 'Fix it',
                            onPress: () => this.setState({
                                visible:false
                            }),
                        },
                        {
                            label: 'Learn more',
                            onPress: () => this.setState({
                                visible:false
                            }),
                        },
                    ]}
                    icon={({ size }) => (
                        <Image
                            source={{
                                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                            }}
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    )}>
                    There was a problem processing a transaction on your credit card.
                    </Banner>
          
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