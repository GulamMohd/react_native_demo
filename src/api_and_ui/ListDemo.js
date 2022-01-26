import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {  Button,IconButton,Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

///////////////////////////////////
import FlatListDemo from './lists/FlatListDemo'
import ListAccordianDemo from './lists/ListAccordianDemo';
import ListAccordianGroupDemo from './lists/ListAccordianGroupDemo';
import ListIconDemo from './lists/ListIconDemo';
import ListItemDemo from './lists/ListItemDemo';
import ListSectionDemo from './lists/ListSectionDemo';
import ListSubheaderDemo from './lists/ListSubheaderDemo';



const ListDemo = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 10 }}>
            <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('FlatListDemo')}>Flat List</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListAccordianDemo')}>List Accordian</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListAccordianGroupDemo')}>List Acordian Group</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListIconDemo')}>List Icon</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListItemDemo')}>List Item</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListSectionDemo')}>List Selection</Button>
                <Button style={styles.buttonStyles} mode='contained' onPress={() => navigation.navigate('ListSubheaderDemo')}>List Subheader</Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonStyles: {
        marginTop: 10,
    }
});

const Stack = createStackNavigator();


function App({ navigation: { goBack } }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListDemo" >
                <Stack.Screen name="ListDemo" component={ListDemo} options={{
                    headerLeft:()=> (
                        <IconButton
                        icon="arrow-left"
                        color={Colors.black}
                        size={25}
                        onPress={() => goBack()}
                    />
                    ),
                }} />
                <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
                <Stack.Screen name="ListAccordianDemo" component={ListAccordianDemo} />
                <Stack.Screen name="ListAccordianGroupDemo" component={ListAccordianGroupDemo} />
                <Stack.Screen name="ListIconDemo" component={ListIconDemo} />
                <Stack.Screen name="ListItemDemo" component={ListItemDemo} />
                <Stack.Screen name="ListSectionDemo" component={ListSectionDemo} />
                <Stack.Screen name="ListSubheaderDemo" component={ListSubheaderDemo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;