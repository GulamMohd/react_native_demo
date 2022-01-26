import * as Facebook from 'expo-facebook';


async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '<APP_ID>',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function getUserAsync() {
    const { name } = await requestAsync('me');
    console.log(`Hello ${name} 👋`);
  }
  
  // Request data from the Facebook Graph API.
  // Learn more https://developers.facebook.com/docs/graph-api/using-graph-api/
  
