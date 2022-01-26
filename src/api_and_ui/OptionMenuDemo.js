import * as React from 'react';
import { render } from 'react-dom';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const OptionMenuDemo = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [item, setItem] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);


    return (
        <Provider>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>

                    <Menu.Item onPress={closeMenu} title="Item 1" />
                    <Menu.Item onPress={closeMenu} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={closeMenu} title="Item 3" />
                    <Menu.Item icon="redo" onPress={() => { }} title="Redo" />
                    <Menu.Item icon="undo" onPress={() => { }} title="Undo" />
                    <Menu.Item icon="content-cut" onPress={() => { }} title="Cut" disabled />
                    <Menu.Item icon="content-copy" onPress={() => { }} title="Copy" disabled />
                    <Menu.Item icon="content-paste" onPress={() => { }} title="Paste" />
                </Menu>
            </View>
        </Provider>
    );
};

export default OptionMenuDemo;
