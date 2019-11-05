import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class forth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.warn(this.props.screenProps.type)
  }

  render() {
    return (
      <View>
        <Text> forth </Text>
      </View>
    );
  }
}
