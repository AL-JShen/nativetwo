import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Task from './Task';

export default class List extends Component {
  
  render() {
    let taskList = this.props.taskList;
    return (
      <View style={styles.container}>
        {taskList.map((task, index) => {
          return <Task 
            key={index}
            itemNo={index}
            content={task}
            removeTask={this.props.removeTask}/>
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

// Swipe actions: https://github.com/jshanson7/react-native-swipeable
// Action button: https://github.com/mastermoo/react-native-action-button