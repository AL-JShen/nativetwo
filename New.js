import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

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
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.createTask}
          enablesReturnKeyAutomatically={true}
          placeholder={'Create a new task.'}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: fixed,
    bottom: 0,
  },
});