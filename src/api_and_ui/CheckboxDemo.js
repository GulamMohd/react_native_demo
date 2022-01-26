import  React,{useState} from 'react';
import { View, StyleSheet,CheckBox,Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxDemo = () => {
    const [checked, setChecked] = React.useState(false);
    const [isSelected, setSelection] = useState(false);

    return (
        <View >
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Checkbox.Item label="Label Name" status={checked ? 'checked' : 'unchecked'} onPress={() => {
                setChecked(!checked);
            }} />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default CheckboxDemo;