import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Topat } from './App'

export default class first extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> first </Text>
                <Button onPress={() => { this.props.navigation.navigate('Second',{type:'typeee'}) }} title='second'/>

      </View>
        );
    }
}
