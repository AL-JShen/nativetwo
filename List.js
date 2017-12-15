import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Task from './Task';

let taskList = this.props.taskList;

export default class List extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        {taskList.map((task, index) => {
          return <Task content={task}/>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});