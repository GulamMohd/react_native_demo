import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SurfaceDemo = () => (
  <Surface style={styles.surface}>
     <Text>Surface</Text>
  </Surface>
);

export default SurfaceDemo;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});