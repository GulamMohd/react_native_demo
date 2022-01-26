import React from 'react';
import {View} from 'react-native';
import {
    Button,
    Title,
    Paragraph,
  } from 'react-native-paper';
  import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
  } from 'react-native-paper-tabs';

  //npm install react-native-paper-tabs @react-native-community/viewpager
  
  function TabDemo() {
      return (
        <Tabs style={{backgroundColor:'white'}} mode='fixed'
          // defaultIndex={0} // default = 0
          // uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          // onChangeIndex={(newIndex) => {}} // react on index change
        >
          <TabScreen label="Explore" icon="compass">
             <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="Flights" icon="airplane">
            {/* <View style={{ backgroundColor: 'black', flex:1 }} /> */}
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="Trips" icon="google">
             <View style={{ backgroundColor: 'red', flex:1 }} />
          </TabScreen>
        </Tabs>
      )
  }
  
  function ExploreWitHookExamples() {
    const goTo = useTabNavigation();
    const index = useTabIndex();
    return (
      <View style={{ flex:1 }}>
        <Title>Explore</Title>
        <Paragraph>Index: {index}</Paragraph>
        <Button onPress={() => index==0?goTo(1):goTo(2)}>{index==0?'Go to Flights':'Go to Trip'}</Button>
      </View>
    );
  }

  export default TabDemo;