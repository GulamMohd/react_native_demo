///expo install expo-brightness
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Slider } from 'react-native';

export default function SliderDemo() {
    const [bright, setBright] = useState(0);
    return (
        <View style={styles.container}>
            <Text>{bright}</Text>
            <Slider style={{ marginTop: 50, width: '100%' }} progress={bright} step={1} minimumValue={0} maximumValue={100} onValueChange={(ChangedValue) => {
                setBright(ChangedValue);
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
