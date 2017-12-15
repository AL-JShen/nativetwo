import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';
import New from './New';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.grabList = this.grabList.bind(this);
  }
  
  grabList = (taskList) => {
    this.setState({
      taskList: taskList,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <List taskList={this.state.taskList}/>
        <New grabList={this.grabList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
