import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class HomeScreen extends Component {
  state = {
    value: '',
  }
  receivedValue = (value) => {
    this.setState({ value })
  }

  onPress() {
    this.props.navigation.navigate('Detail', {
      receivedValue: this.receivedValue,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{this.state.value}</Text>
        <Button title="Go to Detail." onPress={() => this.onPress()}></Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
