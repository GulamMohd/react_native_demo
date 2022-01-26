import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

//npm install reanimated-bottom-sheet
//expo install react-native-gesture-handler react-native-reanimated    //for expo

export default function BottomSheetDemo() {
  const renderContent = () => (
    <View
      style={{
          alignItems:'center',
          justifyContent:'center',
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(450)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 450, 450]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}