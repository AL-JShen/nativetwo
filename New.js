import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, PixelRatio} from 'react-native';

let taskList = [];

export default class New extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
    this.createTask = this.createTask.bind(this);
  }
  
  createTask() {
    taskList.push(this.state.text);
    this.setState({
      text: null,
    });
    this.props.grabList(taskList);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.createTask}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          placeholder={'Create a new task.'}
          placeholderTextColor={'#999'}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#009688',
  }, 
  input: {
    backgroundColor: '#262626',
    padding: PixelRatio.get() * 5,
    color: '#999',
  }
});