import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class third extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.warn(this.props.screenProps.type)
    }

    render() {
        return (
            <View>
                <Text> third </Text>
                <Button onPress={() => { this.props.screenProps.rootNavigation.navigate('First') }} title='chal vai to second' />
            </View>
        );
    }
}
