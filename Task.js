import React, { Component } from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

export default class Task extends Component {
  render() {
    return (
      <View style={styles.task}>
        <Text style={styles.text}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: PixelRatio.get() * 5,
    borderBottomWidth: 0.4,
    borderBottomColor: '#131313',
  },
  text: {
    color: '#ccc',
    fontSize: 14,
  }
});