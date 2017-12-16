import React from 'react';
import { StyleSheet, Text, View, ScrollView, PixelRatio, StatusBar } from 'react-native';
import List from './List';
import New from './New';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.grabList = this.grabList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
  componentWillMount() {
       StatusBar.setHidden(true);
  }
    
  grabList = (taskList) => {
    this.setState({
      taskList: taskList,
    });
  }
  
  removeTask = (key) => {
    let newList = this.state.taskList;
    newList.splice(key, 1);
    this.setState({
      taskList: newList,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <List style={styles.list} taskList={this.state.taskList} removeTask={this.removeTask}/>
        </ScrollView>
        <New style={styles.new} grabList={this.grabList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#363636',
    justifyContent: 'center',
    padding: PixelRatio.get() * 10,
  },
  list: {
    flex: 9,
    borderWidth: 1,
    borderColor: '#000',
  },
  new: {
    flex: 1,
  }
});
