///expo install expo-brightness
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Slider } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function BrightnessDemo() {
    const [bright, setBright] = useState(0);
    useEffect(() => {
        (async () => {
            const { status } = await Brightness.requestPermissionsAsync();
            if (status === 'granted') {
                Brightness.setSystemBrightnessAsync(bright);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Brightness Module Example {bright}</Text>
            <Slider style={{ marginTop: 50, width: '100%' }} progress={bright} step={1} minimumValue={1} maximumValue={100} onValueChange={(ChangedValue) => {
                setBright(ChangedValue);
                Brightness.setSystemBrightnessAsync(ChangedValue / 100);
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
