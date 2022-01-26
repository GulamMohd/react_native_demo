import React, { useEffect } from 'react';
import { Keyboard, TextInput, StyleSheet } from 'react-native';

export default function KeyboardDemo() {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    alert('Keyboard Shown');
  };

  const _keyboardDidHide = () => {
    alert('Keyboard Hidden');
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Click here ..."
      onSubmitEditing={Keyboard.dismiss}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});