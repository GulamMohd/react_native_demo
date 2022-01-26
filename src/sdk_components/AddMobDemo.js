import React from 'react';
import { View } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

///expo install expo-ads-admob

// Set global test device ID
await setTestDeviceIDAsync('EMULATOR');


// Display an interstitial
await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
await AdMobInterstitial.showAdAsync();

// Display a rewarded ad
await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
await AdMobRewarded.requestAdAsync();
await AdMobRewarded.showAdAsync();

export default function AddMobDemo() {
    return (
        < View >
            {/* Display a banner */}
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={this.bannerError} />

            {/* // Display a DFP Publisher banner */}
            <PublisherBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                onDidFailToReceiveAdWithError={this.bannerError}
                onAdMobDispatchAppEvent={this.adMobEvent} />
        </View >
    );
}


// "android": {
//     // ...
//     "config": {
//       // ...
//       "googleMobileAdsAppId": "ca-app-pub-3940256099942544~3347511713" // sample id, replace with your own
//     }
//   },
//   "ios": {
//     // ...
//     "config": {
//       // ...
//       "googleMobileAdsAppId": "ca-app-pub-3940256099942544~1458002511" // sample id, replace with your own
//     }
//   }
