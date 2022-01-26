// Using Navigation
import { FlatList } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React,{useState,Component } from 'react';
import {NavigationContainer,StyleSheet, Text, View, Image,Button,TextInput,SectionList,SafeAreaView,TouchableOpacity } from 'react-native';
// Components
import Home from './src/Home';

///////////////////////// Api and Ui Component imports /////////////////////////////////
import Profile from './src/api_and_ui/Profile';
import ActivityIndicatorDemo from './src/api_and_ui/ActivityIndicatorDemo';
import ButtonDemo from './src/api_and_ui/ButtonDemo';
import AppbarDemo from './src/api_and_ui/AppbarDemo';
import AvatarDemo from './src/api_and_ui/AvatarDemo';
import BadgeDemo from './src/api_and_ui/BadgeDemo';
import BannerDemo from './src/api_and_ui/BannerDemo';
import BottomNavigationDemo from './src/api_and_ui/BottomNavigationDemo';
import CardDemo from './src/api_and_ui/CardDemo';
import CheckboxDemo from './src/api_and_ui/CheckboxDemo';
import ChipDemo from './src/api_and_ui/ChipDemo';
import DataTableDemo from './src/api_and_ui/DataTableDemo';
import DialogDemo from './src/api_and_ui/DialogDemo'
import DividerDemo from './src/api_and_ui/DividerDemo';
import DrawerDemo from './src/api_and_ui/DrawerDemo';
import FabDemo from './src/api_and_ui/FabDemo'
import HelperTextDemo from './src/api_and_ui/HelperTextDemo';
import ListDemo from './src/api_and_ui/ListDemo';
import OptionMenuDemo from './src/api_and_ui/OptionMenuDemo';
import ModalDemo from './src/api_and_ui/ModalDemo';
import ProgressBarDemo from './src/api_and_ui/ProgressBarDemo';
import RadioButtonDemo from './src/api_and_ui/RadioButtonDemo';
import SearchBarDemo from './src/api_and_ui/SearchBarDemo';
import SnackBarDemo from './src/api_and_ui/SnackBarDemo';
import SurfaceDemo from './src/api_and_ui/SurfaceDemo';
import SwitchDemo from './src/api_and_ui/SwitchDemo';
import TextInputDemo from './src/api_and_ui/TextInputDemo';
import ToggleButtonDemo from './src/api_and_ui/ToggleButtonDemo';
import RippleDemo from './src/api_and_ui/RippleDemo';
import TypographyDemo from './src/api_and_ui/TypographyDemo';
import ThemeDemo from './src/api_and_ui/ThemeDemo';
import CustomFontsDemo from './src/api_and_ui/CustomFontsDemo';
import BottomSheetDemo from './src/api_and_ui/BottomSheetDemo';
import TabDemo from './src/api_and_ui/TabDemo';
import SingleDatePageDemo from './src/api_and_ui/SingleDatePageDemo';
import DrawerMenuDemo from './src/api_and_ui/DrawerMenuDemo';
import CustomViewDemo from './src/api_and_ui/CustomViewDemo';
import DrawerLayoutDemo from './src/api_and_ui/DrawerLayoutDemo'
import AccesoryViewDemo from './src/api_and_ui/AccesoryViewDemo';
import KeyboardAvoidingComponentDemo from './src/api_and_ui/KeyboardAvoidingComponentDemo';
import SwipeRefreshDemo from './src/api_and_ui/SwipeRefreshDemo';
import StatusBarDemo from './src/api_and_ui/StatusBarDemo';
import TouchableDemo from './src/api_and_ui/TouchableDemo';
import AccessibilityInfoDemo from './src/api_and_ui/AccessibilityInfoDemo';
import AnimationDemo from './src/api_and_ui/AnimationDemo';
import BackHandlerDemo from './src/api_and_ui/BackHandlerDemo';
import ClipboardDemo from './src/api_and_ui/ClipboardDemo';
import DimensionsDemo from './src/api_and_ui/DimensionsDemo';
import EasingDemo from './src/api_and_ui/EasingDemo';
import InteractionManegerDemo from './src/api_and_ui/InteractionManagerDemo';
import KeyboardDemo from './src/api_and_ui/KeyboardDemo';
import LayoutDemo from './src/api_and_ui/LayoutDemo';
import LayoutAnimationDemo from './src/api_and_ui/LayoutAnimationDemo';
import PanResponderDemo from './src/api_and_ui/PanResponderDemo';
import PixelRatioDemo from './src/api_and_ui/PixelRatioDemo';
import ShadowDemo from './src/api_and_ui/ShadowDemo';
import ShareDemo from './src/api_and_ui/ShareDemo';
import TextStyleDemo from './src/api_and_ui/TextStyleDemo';
import ToastAndroidDemo from './src/api_and_ui/ToastAndroidDemo';
import TransformDemo from './src/api_and_ui/TransformDemo';
import VibrationDemo from './src/api_and_ui/VibrationDemo';
import DraggableViewDemo from './src/api_and_ui/DraggableViewDemo';
import ImageBackgroundDemo from './src/api_and_ui/ImageBackgroundDemo';
import ImagesDemo from './src/api_and_ui/ImagesDemo';
import SliderDemo from './src/api_and_ui/SliderDemo';



/////////////////// Sdk Component Imports ////////////////////////
import AccelerometerDemo from './src/sdk_components/AccelerometerDemo';
import AppLoadingDemo from './src/sdk_components/AppLoadingDemo';
import ArtDemo from './src/sdk_components/ArtDemo';
import PlaySoundDemo from './src/sdk_components/PlaySoundDemo';
import RecordSoundDemo from './src/sdk_components/RecordSoundDemo';
import SecureStoreDemo from './src/sdk_components/SecureStoreDemo';
import BarCodeScannerDemo from './src/sdk_components/BarCodeScannerDemo';
import BarometerDemo from './src/sdk_components/BarometerDemo';
import BatteryDemo from './src/sdk_components/BatteryDemo';
import BlurDemo from './src/sdk_components/BlurDemo';
import BrightnessDemo from './src/sdk_components/BrightnessDemo';
import CalenderDemo from './src/sdk_components/CalenderDemo';
import CameraDemo from './src/sdk_components/CameraDemo';
import CellulerDemo from './src/sdk_components/CellulerDemo';
import ContactsDemo from './src/sdk_components/ContactsDemo';
import CryptoDemo from './src/sdk_components/CryptoDemo';
import DeviceDemo from './src/sdk_components/DeviceDemo';
import DocumentPickerDemo from './src/sdk_components/DocumentPickerDemo';
import FaceDetectorDemo from './src/sdk_components/FaceDetectorDemo';
import GLViewDemo from './src/sdk_components/GLViewDemo';
import GyroscopeDemo from './src/sdk_components/GyroscopeDemo';
import ImagePickerDemo from './src/sdk_components/ImagePickerDemo';
import KeepAwakeDemo from './src/sdk_components/KeepAwakeDemo';
import NotificationDemo from './src/sdk_components/NotificationDemo';
import LinearGradientDemo from './src/sdk_components/LinearGradientDemo';
import LinkingDemo from './src/sdk_components/LinkingDemo';
import LocalizationDemo from './src/sdk_components/LocalizationDemo';
import LocationDemo from './src/sdk_components/LocationDemo';
//import LottieDemo from './src/sdk_components/LottieDemo';



//////not in use
// import ListAccordianDemo from './src/lists/ListAccordianDemo';
// import ListAccordianGroupDemo from './src/lists/ListAccordianGroupDemo';
// import ListIconDemo from './src/lists/ListIconDemo';
// import ListItemDemo from './src/lists/ListItemDemo';
// import ListSectionDemo from './src/lists/ListSectionDemo';
// import ListSubheaderDemo from './src/lists/ListSubheaderDemo';



//////////////////////////////////////////////

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Home: { screen: Home},

    /////////////// Ui & Api Componenets //////////////////////
    Profile: { screen: Profile },
    ActivityIndicatorDemo:{screen: ActivityIndicatorDemo},
    ButtonDemo:{screen: ButtonDemo},
    AppbarDemo:{screen:AppbarDemo},
    AvatarDemo:{screen:AvatarDemo},
    BadgeDemo:{screen:BadgeDemo},
    BannerDemo:{screen:BannerDemo},
    BottomNavigationDemo:{screen:BottomNavigationDemo},
    CardDemo:{screen:CardDemo},
    CheckboxDemo:{screen:CheckboxDemo},
    ChipDemo:{screen:ChipDemo},
    DataTableDemo:{screen:DataTableDemo},
    DialogDemo:{screen:DialogDemo},
    DividerDemo:{screen:DividerDemo},
    DrawerDemo:{screen:DrawerDemo},
    FabDemo:{screen:FabDemo},
    HelperTextDemo:{screen:HelperTextDemo},
    ListDemo:{screen:ListDemo,navigationOptions:{headerShown:false}},
    OptionMenuDemo:{screen:OptionMenuDemo},
    ModalDemo:{screen:ModalDemo},
    ProgressBarDemo:{screen:ProgressBarDemo},
    RadioButtonDemo:{screen:RadioButtonDemo},
    SearchBarDemo:{screen:SearchBarDemo},
    SnackBarDemo:{screen:SnackBarDemo},
    SurfaceDemo:{screen:SurfaceDemo},
    SwitchDemo:{screen:SwitchDemo},
    TextInputDemo:{screen:TextInputDemo},
    ToggleButtonDemo:{screen:ToggleButtonDemo},
    RippleDemo:{screen:RippleDemo},
    TypographyDemo:{screen:TypographyDemo},
    ThemeDemo:{screen:ThemeDemo},
    CustomFontsDemo:{screen:CustomFontsDemo},
    BottomSheetDemo:{screen:BottomSheetDemo},
    TabDemo:{screen:TabDemo},
    SingleDatePageDemo:{screen:SingleDatePageDemo},
    DrawerMenuDemo:{screen:DrawerMenuDemo,navigationOptions:{headerShown:false}},
    CustomViewDemo:{screen:CustomViewDemo},
    DrawerLayoutDemo:{screen:DrawerLayoutDemo},
    AccesoryViewDemo:{screen:AccesoryViewDemo},
    KeyboardAvoidingComponentDemo:{screen:KeyboardAvoidingComponentDemo},
    SwipeRefreshDemo:{screen:SwipeRefreshDemo},
    StatusBarDemo:{screen:StatusBarDemo},
    TouchableDemo:{screen:TouchableDemo},
    AccessibilityInfoDemo:{screen:AccessibilityInfoDemo},
    AnimationDemo:{screen:AnimationDemo},
    BackHandlerDemo:{screen:BackHandlerDemo},
    ClipboardDemo:{screen:ClipboardDemo},
    DimensionsDemo:{screen:DimensionsDemo},
    EasingDemo:{screen:EasingDemo},
    InteractionManegerDemo:{screen:InteractionManegerDemo},
    KeyboardDemo:{screen:KeyboardDemo},
    LayoutDemo:{screen:LayoutDemo},
    LayoutAnimationDemo:{screen:LayoutAnimationDemo},
    PanResponderDemo:{screen:PanResponderDemo},
    PixelRatioDemo:{screen:PixelRatioDemo},
    ShadowDemo:{screen:ShadowDemo},
    ShareDemo:{screen:ShareDemo},
    TextStyleDemo:{screen:TextStyleDemo},
    ToastAndroidDemo:{screen:ToastAndroidDemo},
    TransformDemo:{screen:TransformDemo},
    VibrationDemo:{screen:VibrationDemo},
    DraggableViewDemo:{screen:DraggableViewDemo},
    ImageBackgroundDemo:{screen:ImageBackgroundDemo},
    ImagesDemo:{screen:ImagesDemo},
    SliderDemo:{screen:SliderDemo},

    ///////////////Sdk components/////////////////////
    AccelerometerDemo:{screen:AccelerometerDemo},
    AppLoadingDemo:{screen:AppLoadingDemo},
    ArtDemo:{screen:ArtDemo},
    PlaySoundDemo:{screen:PlaySoundDemo},
    RecordSoundDemo:{screen:RecordSoundDemo},
    SecureStoreDemo:{screen:SecureStoreDemo},
    BarCodeScannerDemo:{screen:BarCodeScannerDemo},
    BarometerDemo:{screen:BarometerDemo},
    BatteryDemo:{screen:BatteryDemo},
    BlurDemo:{screen:BlurDemo},
    BrightnessDemo:{screen:BrightnessDemo},
    CalenderDemo:{screen:CalenderDemo},
    CameraDemo:{screen:CameraDemo},
    CellulerDemo:{screen:CellulerDemo},
    ContactsDemo:{screen:ContactsDemo},
    CryptoDemo:{screen:CryptoDemo},
    DeviceDemo:{screen:DeviceDemo},
    DocumentPickerDemo:{screen:DocumentPickerDemo},
    FaceDetectorDemo:{screen:FaceDetectorDemo},
    GLViewDemo:{screen:GLViewDemo},
    GyroscopeDemo:{screen:GyroscopeDemo},
    ImagePickerDemo:{screen:ImagePickerDemo},
    KeepAwakeDemo:{screen:KeepAwakeDemo},
    NotificationDemo:{screen:NotificationDemo},
    LinearGradientDemo:{screen:LinearGradientDemo},
    LinkingDemo:{screen:LinkingDemo},
    LocalizationDemo:{screen:LocalizationDemo},
    LocationDemo:{screen:LocationDemo},
   // LottieDemo:{screen:LottieDemo},

    }
);

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const UsingNavigation = createAppContainer(Navigator);

export default UsingNavigation;