
import * as React from 'react';
import { Button,DefaultTheme,DarkTheme,withTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#0000ff',
    accent: '#ff0000',
  },
//   myOwnProperty: true,
//   // Specify custom property in nested object
//   colors: {
//     myOwnColor: '#BADA55',
//   }
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      {/* <App /> */}
      <Button mode='contained' style={{margin:5}} raised theme={{ roundness: 3,colors:{primary:'#00ff00'} }}>
        Press me
    </Button>
    <Button style={{margin:5}} mode='contained'>Text</Button>
    <Button mode='contained' style={{margin:5}} raised theme={DefaultTheme}>
        Press me
    </Button>

    <Button mode='contained' style={{margin:5}} raised theme={DarkTheme}>
        Press me
    </Button>
    
    
    </PaperProvider>
  );
}