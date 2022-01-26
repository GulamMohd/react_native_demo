import * as React from 'react';
import { View } from 'react-native';
import { Divider, RadioButton, Text } from 'react-native-paper';

const RadioButtonDemo = () => {
    const [checked, setChecked] = React.useState('first');
    const [value, setValue] = React.useState('first');
    const [tick, setTick] = React.useState('first');

    return (
        <View>
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
            <Divider />
            <Text style={{ fontSize: 20, marginTop: 30, marginBottom: 10 }}>Radio Group</Text>
            <RadioButton.Group onValueChange={newValue => setTick(newValue)} value={tick}>
                <View>
                    <Text>First</Text>
                    <RadioButton value="first" />
                </View>
                <View>
                    <Text>Second</Text>
                    <RadioButton value="second" />
                </View>
            </RadioButton.Group>

            <Divider />
            <Text style={{ fontSize: 20, marginTop: 30, marginBottom: 10 }}>Radio Group With Item</Text>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
        </View>
    );
};

export default RadioButtonDemo;