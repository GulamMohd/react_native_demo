import React from 'react';
import { View,Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Surface, Shape, Circle } from '@react-native-community/art';


export default function ArtDemo() {
    return (
        <View>
            {/* <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} />
            <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}


            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={100}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />



            <AnimatedCircularProgress
                size={200}
                width={3}
                fill={40}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">

            </AnimatedCircularProgress>

            {/* <AnimatedCircularProgress
                size={120}
                width={15}
                fill={100}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
                padding={10}
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
            /> */}


        </View>
    );
}