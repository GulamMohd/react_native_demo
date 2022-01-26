import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { fromRight } from 'react-navigation-transitions';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardDemo = () => (
  <Card>
    <Card.Title title="Card" subtitle="A card is a sheet of material that serves as an entry point to more detailed information." left={LeftContent} />
    <Card.Content>
      <Title>Card</Title>
      <Paragraph>A card is a sheet of material that serves as an entry point to more detailed information.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../../assets/img.jpg')} />
    <Card.Actions >
        <Text style={{flex:1}}/>
      <Button mode='text'>Cancel</Button>
      <Button style={{marginRight:10}}>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CardDemo;