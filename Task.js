import React, {Component} from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';
import Swipeable from 'react-native-swipeable';

const rightContent = (
  <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#600000', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: PixelRatio.get() * 7}}>
  <Text style={{fontSize: 16, color: '#ddd'}}>DELETE</Text>
  </View>
)

export default class Task extends Component {

  render() {
    return (
      <Swipeable rightContent={rightContent} onRightActionRelease={() => this.props.removeTask(this.props.itemNo)} rightActionActivationDistance={250}>
        <View style={styles.task}>
          <Text style={styles.text}>{this.props.content}</Text>
        </View>
      </Swipeable>
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
    borderBottomColor: '#131313'
  },
  text: {
    color: '#ddd',
    fontSize: 16
  }
});