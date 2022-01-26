import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const randomHexColor = () => {
    return '#000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
};

const TouchableDemo = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);


    const [rippleColor, setRippleColor] = useState(randomHexColor());
    const [rippleOverflow, setRippleOverflow] = useState(false);

    return (
        <View style={styles.container}>

            {/* //////////////////////// */}
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touchable Highlight</Text>
                </View>
            </TouchableHighlight>

            {/* /////////////////////////////// */}

            <TouchableNativeFeedback
                onPress={() => {
                    setRippleColor(randomHexColor());
                    setRippleOverflow(!rippleOverflow);
                }}
                background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}>
                <View style={styles.touchable}>
                    <Text style={styles.text}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>

            {/* ///////////////////////////// */}
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>


            {/* ////////////////////////////////////// */}
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touchable With out Feedback</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.countContainer}>
                <Text style={styles.countText}>{count ? count : null}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    countText: {
        color: '#FF00FF',
    },
    touchable: { flex: 0.3, borderColor: 'black', marginTop: 10, alignContent: 'center', justifyContent: 'center', borderWidth: 1 },
    text: { alignSelf: 'center' },
});

export default TouchableDemo;