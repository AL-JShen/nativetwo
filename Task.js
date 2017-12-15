import React, { Component } from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

export default class Task extends Component {
  render() {
    return (
      <View style={styles.task}>
        <Text>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    marginBottom: PixelRatio.get() * 2,
    borderWidth: 1,
    borderColor: '#000',
  },
});