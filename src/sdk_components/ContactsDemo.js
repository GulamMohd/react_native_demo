//npm install expo-contacts
import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsDemo() {
  const [contact,setContact] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContact(data);
          console.log(data[0]);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{contact[0].firstName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
