import * as React from 'react';
import { View } from 'react-native';
import { ToggleButton } from 'react-native-paper';

const ToggleButtonDemo = () => {
    const [status, setStatus] = React.useState('checked');

    const [value, setValue] = React.useState('left');

    const onButtonToggle = value => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };

    return (
        <View>
            <ToggleButton
                style={{ alignSelf: 'center', marginTop: 50 }}
                icon="bluetooth"
                value="bluetooth"
                status={status}
                onPress={onButtonToggle}
            />
            
            <ToggleButton.Group
                onValueChange={value => setValue(value)}
                value={value}>
                <ToggleButton icon="format-align-left" value="left" />
                <ToggleButton icon="format-align-right" value="right" />
            </ToggleButton.Group>


            <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                <ToggleButton icon="format-align-left" value="left" />
                <ToggleButton icon="format-align-right" value="right" />
            </ToggleButton.Row>

        </View>
    );
};

export default ToggleButtonDemo;