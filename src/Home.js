import React from 'react';
import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { } from 'react-native-paper';
import * as IntentLauncher from 'expo-intent-launcher';

/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView}>

                    {/* /////////////////// Api & Ui Components ////////////////////////// */}
                    <Text style={styles.text}>UI & API Component </Text>
                    <View style={{ borderColor: '#007acc', borderWidth: 10, padding: 4 }}>
                        <View style={styles.viewChilds}>
                            <Button
                                title="Activity Indicator"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ActivityIndicatorDemo', { name: 'ActivityIndicatorDemo' }
                                )}
                            />
                        </View>
                        <View style={styles.viewChilds}>
                            <Button
                                title="Buttons"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ButtonDemo', { name: 'ButtonDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Appbar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AppbarDemo', { name: 'Appbar' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Avatar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AvatarDemo', { name: 'AvatarDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Badge"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BadgeDemo', { name: 'BadgeDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Banner"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BannerDemo', { name: 'BannerDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="BottomNavigation"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BottomNavigationDemo', { name: 'BottomNavigationDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Card"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CardDemo', { name: 'CardDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Checkbox"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CheckboxDemo', { name: 'CheckboxDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Chip"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ChipDemo', { name: 'ChipDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="DataTable"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DataTableDemo', { name: 'DataTable Demo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Dialog"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DialogDemo', { name: 'Dialog Demo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Divider"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DividerDemo', { name: 'Divider Demo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Drawer"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DrawerDemo', { name: 'Drawer Demo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Fab"
                                style={styles.button}
                                onPress={() => navigate(
                                    'FabDemo', { name: 'Fab Demo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="HelperText"
                                style={styles.button}
                                onPress={() => navigate(
                                    'HelperTextDemo', { name: 'HelperText Demo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Lists"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ListDemo', { name: 'List Demo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Option Menu"
                                style={styles.button}
                                onPress={() => navigate(
                                    'OptionMenuDemo', { name: 'OptionMenu Demo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Modal"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ModalDemo', { name: 'Modal Demo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="ProgressBar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ProgressBarDemo', { name: 'ProgressBarDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="RadioButton"
                                style={styles.button}
                                onPress={() => navigate(
                                    'RadioButtonDemo', { name: 'RadioButtonDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="SearchBar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SearchBarDemo', { name: 'SearchBarDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="SnackBar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SnackBarDemo', { name: 'SnackBarDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Surface"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SurfaceDemo', { name: 'SurfaceDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Switch"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SwitchDemo', { name: 'SwitchDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="TextInput"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TextInputDemo', { name: 'TextInputDemo' }
                                )}
                            />
                        </View>




                        <View style={styles.viewChilds}>
                            <Button
                                title="ToggleButton"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ToggleButtonDemo', { name: 'ToggleButtonDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Ripple"
                                style={styles.button}
                                onPress={() => navigate(
                                    'RippleDemo', { name: 'RippleDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Typography"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TypographyDemo', { name: 'TypographyDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Theme"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ThemeDemo', { name: 'ThemeDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="CustomFonts"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CustomFontsDemo', { name: 'CustomFontsDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="BottomSheet"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BottomSheetDemo', { name: 'BottomSheetDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Tabs"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TabDemo', { name: 'TabDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="DateTimePicker"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SingleDatePageDemo', { name: 'SingleDatePageDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="DrawerMenuDemo"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DrawerMenuDemo', { name: 'DrawerMenuDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="CustomView"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CustomViewDemo', { name: 'CustomViewDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="DrawerLayoutAndroid"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DrawerLayoutDemo', { name: 'DrawerLayoutDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="AccesoryView"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AccesoryViewDemo', { name: 'AccesoryViewDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="KeyboardAvoidingComponent"
                                style={styles.button}
                                onPress={() => navigate(
                                    'KeyboardAvoidingComponentDemo', { name: 'KeyboardAvoidingComponentDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="SwipeRefresh"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SwipeRefreshDemo', { name: 'SwipeRefreshDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="StatusBar"
                                style={styles.button}
                                onPress={() => navigate(
                                    'StatusBarDemo', { name: 'StatusBarDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Touchable"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TouchableDemo', { name: 'TouchableDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="AccessibilityInfo"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AccessibilityInfoDemo', { name: 'AccessibilityInfoDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Animation"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AnimationDemo', { name: 'AnimationDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="BackHandler"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BackHandlerDemo', { name: 'BackHandlerDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Clipboard"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ClipboardDemo', { name: 'ClipboardDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Dimensions"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DimensionsDemo', { name: 'DimensionsDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Easing Animations"
                                style={styles.button}
                                onPress={() => navigate(
                                    'EasingDemo', { name: 'EasingDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="InteractionManeger"
                                style={styles.button}
                                onPress={() => navigate(
                                    'InteractionManegerDemo', { name: 'InteractionManegerDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Keyboard"
                                style={styles.button}
                                onPress={() => navigate(
                                    'KeyboardDemo', { name: 'KeyboardDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Layout"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LayoutDemo', { name: 'LayoutDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="LayoutAnimation"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LayoutAnimationDemo', { name: 'LayoutAnimationDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="PanResponder"
                                style={styles.button}
                                onPress={() => navigate(
                                    'PanResponderDemo', { name: 'PanResponderDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="PixelRatio"
                                style={styles.button}
                                onPress={() => navigate(
                                    'PixelRatioDemo', { name: 'PixelRatioDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Shadow"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ShadowDemo', { name: 'ShadowDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Share"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ShareDemo', { name: 'ShareDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="TextStyle"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TextStyleDemo', { name: 'TextStyleDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="ToastAndroid"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ToastAndroidDemo', { name: 'ToastAndroidDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Transforms"
                                style={styles.button}
                                onPress={() => navigate(
                                    'TransformDemo', { name: 'TransformDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Vibration"
                                style={styles.button}
                                onPress={() => navigate(
                                    'VibrationDemo', { name: 'VibrationDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="DraggableView"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DraggableViewDemo', { name: 'DraggableViewDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="ImageBackGround"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ImageBackgroundDemo', { name: 'ImageBackgroundDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Images"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ImagesDemo', { name: 'ImagesDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Slider"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SliderDemo', { name: 'SliderDemo' }
                                )}
                            />
                        </View>
                    </View>


                    {/* //////////////////++++ SDK Compnents +++++///////////////////////// */}

                    <Text style={styles.text}>SDK Component </Text>
                    <View style={{ borderColor: '#007acc', borderWidth: 10, padding: 4 }}>
                        <View style={styles.viewChilds}>
                            <Button
                                title="Accelerometer"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AccelerometerDemo', { name: 'AccelerometerDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="AppLoading"
                                style={styles.button}
                                onPress={() => navigate(
                                    'AppLoadingDemo', { name: 'AppLoadingDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="ArtDemo"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ArtDemo', { name: 'ArtDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="PlaySound"
                                style={styles.button}
                                onPress={() => navigate(
                                    'PlaySoundDemo', { name: 'PlaySoundDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="RecordSoundDemo"
                                style={styles.button}
                                onPress={() => navigate(
                                    'RecordSoundDemo', { name: 'RecordSoundDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="SecureStore"
                                style={styles.button}
                                onPress={() => navigate(
                                    'SecureStoreDemo', { name: 'SecureStoreDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="BarCodeScanner"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BarCodeScannerDemo', { name: 'BarCodeScannerDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Barometer"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BarometerDemo', { name: 'BarometerDemo' }
                                )}
                            />
                        </View>




                        <View style={styles.viewChilds}>
                            <Button
                                title="Battery"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BatteryDemo', { name: 'BatteryDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="BlurView"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BlurDemo', { name: 'BlurDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Brightness"
                                style={styles.button}
                                onPress={() => navigate(
                                    'BrightnessDemo', { name: 'BrightnessDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Calender"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CalenderDemo', { name: 'CalenderDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="Camera"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CameraDemo', { name: 'CameraDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Celluler"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CellulerDemo', { name: 'CellulerDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Contacts"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ContactsDemo', { name: 'ContactsDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Crypto"
                                style={styles.button}
                                onPress={() => navigate(
                                    'CryptoDemo', { name: 'CryptoDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Device Details"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DeviceDemo', { name: 'DeviceDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="DocumentPicker"
                                style={styles.button}
                                onPress={() => navigate(
                                    'DocumentPickerDemo', { name: 'DocumentPickerDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="FaceDetector IOS"
                                style={styles.button}
                                onPress={() => navigate(
                                    'FaceDetectorDemo', { name: 'FaceDetectorDemo' }
                                )}
                            />
                        </View>



                        <View style={styles.viewChilds}>
                            <Button
                                title="GLView"
                                style={styles.button}
                                onPress={() => navigate(
                                    'GLViewDemo', { name: 'GLViewDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="Gyroscope"
                                style={styles.button}
                                onPress={() => navigate(
                                    'GyroscopeDemo', { name: 'GyroscopeDemo' }
                                )}
                            />
                        </View>


                        <View style={styles.viewChilds}>
                            <Button
                                title="ImagePicker"
                                style={styles.button}
                                onPress={() => navigate(
                                    'ImagePickerDemo', { name: 'ImagePickerDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Intent Launcher"
                                style={styles.button}
                                onPress={() => IntentLauncher.startActivityAsync(IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS)}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="KeepAwake"
                                style={styles.button}
                                onPress={() => navigate(
                                    'KeepAwakeDemo', { name: 'KeepAwakeDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Notification"
                                style={styles.button}
                                onPress={() => navigate(
                                    'NotificationDemo', { name: 'NotificationDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="LinearGradient"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LinearGradientDemo', { name: 'LinearGradientDemo' }
                                )}
                            />
                        </View>
                        
                        <View style={styles.viewChilds}>
                            <Button
                                title="Linking"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LinkingDemo', { name: 'LinkingDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Localization"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LocalizationDemo', { name: 'LocalizationDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Location"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LocationDemo', { name: 'LocationDemo' }
                                )}
                            />
                        </View>

                        <View style={styles.viewChilds}>
                            <Button
                                title="Lottie Animation"
                                style={styles.button}
                                onPress={() => navigate(
                                    'LottieDemo', { name: 'LottieDemo' }
                                )}
                            />
                        </View>


                        





                    </View>
                </ScrollView>
            </SafeAreaView>
        );

    }

}

const styles = StyleSheet.create({
    container: {

    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewChilds: {
        flex: 1,
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 30, height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#007acc'
    }
});