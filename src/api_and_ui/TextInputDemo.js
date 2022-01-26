import React,{useState} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputDemo = () => {
    const [text, setText] = React.useState('');
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    return (
        <View >
            <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput.Icon
                label="Text with Icon"
                value={text}
                onChangeText={text => setText(text)}
            />

            <UselessTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    );
};

export default TextInputDemo;


const UselessTextInput = props => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
};