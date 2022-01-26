import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

///npm install expo-camera
///npm install expo-permissions
///npm install expo-image-picker

///expo install react-native-view-shot
//import { captureRef } from 'react-native-view-shot'; 

// const targetPixelCount = 1080; // If you want full HD pictures
// const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
// // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
// const pixels = targetPixelCount / pixelRatio;

// const result = await captureRef(this.imageContainer, {
//   result: 'tmpfile',
//   height: pixels,
//   width: pixels,
//   quality: 1,
//   format: 'png',
// });



export default class CameraDemo extends React.Component {
    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        // Camera roll Permission 
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    handleCameraType = () => {
        const { cameraType } = this.state

        this.setState({
            cameraType:
                cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
        })
    }

    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            alert(photo.uri+'');
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
        alert(result.uri);
    }


    render() {
        const { hasPermission } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => { this.camera = ref }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30 }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent'
                                }}
                                onPress={() => this.pickImage()}>
                                    {/* <Ionicons */}
                                <FontAwesome
                                    name="file-image-o"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.takePicture()}
                            >
                                <FontAwesome
                                    name="camera"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.handleCameraType()}
                            >
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

}