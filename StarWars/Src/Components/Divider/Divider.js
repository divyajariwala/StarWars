import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default class Divider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[
                this.props.style,
                { height: 1.5, width: this.props.Width, backgroundColor: 'black', marginTop: height(2), marginBottom: this.props.marginBottom, },
            ]} >
                <Text></Text>
            </View>
        );
    }
}
