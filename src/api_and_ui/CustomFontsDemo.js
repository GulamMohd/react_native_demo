import React from "react";
import { ActivityIndicator,Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

export default function CustomFontsDemo() {
  const [isLoaded] = useFonts({
    "b": require("../../assets/fonts/b.ttf"),
  });

  if (!isLoaded) {
    return <ActivityIndicator />;
  } else {
    return ( 
   <View>
     <Text 
       style={{ fontFamily: "b",fontSize:30,alignContent:"center",justifyContent:"center",backgroundColor:'green'}}>
        Hello World
     </Text>
   </View>
   )
  }
}