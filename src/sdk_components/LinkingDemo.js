//expo install expo-linking

import React from 'react';
import { Button } from 'react-native';
import * as Linking from 'expo-linking';

export default function LinkingDemo() {
    return (
        <Button title="Open Google" onPress={() => Linking.openURL('https://www.google.com/')} />
    );
}