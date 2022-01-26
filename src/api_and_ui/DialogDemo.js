import * as React from 'react';
import { View ,ScrollView,Alert} from 'react-native';
import { Button, Paragraph,Text, Dialog, Provider } from 'react-native-paper';

const DialogDemo = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View style={{flex:1}}>
      <Button onPress={showDialog}>Show Dialog</Button>

      <Button onPress={createThreeButtonAlert}>Show Dialog Api</Button>
      <Provider>
        <Dialog visible={visible} onDismiss={hideDialog}>
        
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>

          <Dialog.ScrollArea>
          <ScrollView contentContainerStyle={{}}>
            <Text >This is a scrollable area</Text>
          </ScrollView>
        </Dialog.ScrollArea>

          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Provider>
    </View>
  );
};

const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

export default DialogDemo;