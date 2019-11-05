import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Topat } from './App'

export default class second extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // console.warn(this.props.navigation.getParam('type'));

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'red' }}>
                    <Text>this is test</Text>
                </View>
                <Topat screenProps={this.props.screenProps} />
            </View>
        );
    }
}
