import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

const ProgressBarDemo = () => (

  <ProgressBar style={{marginTop:50}} progress={.3} color={Colors.blueA100} />
);

export default ProgressBarDemo;