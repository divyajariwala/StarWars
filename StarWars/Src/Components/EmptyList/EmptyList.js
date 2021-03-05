import React from 'react'
import { View, Text, Image } from 'react-native';
import style from './Style';
import { width, height, totalSize } from 'react-native-dimension';
const { Maincontainer } = style;
const EmptyList = () => {
    return (
        <View style={[Maincontainer]}>
            <Text >Oops!</Text>
            <Text>No Data Found</Text>
        </View>
    )
}

export default EmptyList

