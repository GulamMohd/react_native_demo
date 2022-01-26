import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const SnackBarDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onToggleSnackBar1 = () => setVisible1(!visible1);

  const onDismissSnackBar = () => setVisible(false);

  const onDismissSnackBar1 = () => setVisible1(false);

  return (
    <View style={styles.container}>
      <Button style={{margin:10}} mode='contained' onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show without Button'}</Button>
      <Button style={{margin:10}} mode='contained' onPress={onToggleSnackBar1}>{visible1 ? 'Hide' : 'Show with Button'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={1000}
        >
        Hey there! I'm a Snackbar.
      </Snackbar>

      <Snackbar
        visible={visible1}
        onDismiss={onDismissSnackBar1}
        duration={3000}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar With Button.
      </Snackbar>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SnackBarDemo;