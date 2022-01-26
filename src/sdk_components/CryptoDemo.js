import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function CryptoDemo() {
  const [sha,setSHA]=useState('');
  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        'Github stars are neat 🌟'
      );
      setSHA(digest);
      console.log('Digest: ', digest);
      /* Some crypto operation... */
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{padding:55}}>SHA : {sha}</Text>
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
